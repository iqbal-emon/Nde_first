using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Nde1st.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Text;

[ApiController]
public class blogController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private object ImageField;

    public blogController(IConfiguration config)
    {
        _configuration = config;
    }
    [HttpGet]
    [Route("GetAllDetails")]
    public List<ndeFirst> GetAllDetails()
    {
        List<ndeFirst> Lst = new List<ndeFirst>();

        using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
        {
            con.Open();

            using (SqlCommand cmd = new SqlCommand("SELECT * FROM Bloglist", con))
            {
                using (SqlDataAdapter da = new SqlDataAdapter(cmd))
                {
                    DataTable dt = new DataTable();
                    da.Fill(dt);

                    foreach (DataRow row in dt.Rows)
                    {
                        ndeFirst dto = new ndeFirst
                        {
                            TextField1 = row["TextField1"].ToString(),
                            TextField2 = row["TextField2"].ToString(),
                            ImageField1 = row["ImageField"] != DBNull.Value
                            ? ConvertToByteArray(row["ImageField"])
                            : null
                        };
                        Lst.Add(dto);
                    }
                }
            }
        }

        return Lst;
    }

    private byte[] ConvertToByteArray(object value)
{
    if (value is byte[] byteArray)
    {
        return byteArray;
    }

    // Handle other conversions if necessary
    return null;
}

    [HttpPost]
    [Route("InsertBlog")]
    public async Task<IActionResult> InsertBlogAsync([FromForm] ndeFirst blog)
    {
        Console.WriteLine("Hello");
        try
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("INSERT INTO Bloglist (TextField1, TextField2, ImageField) VALUES (@TextField1, @TextField2, CAST(@ImageField AS VARBINARY(MAX)))", con))
                {
                    cmd.Parameters.AddWithValue("@TextField1", blog.TextField1);
                    Console.WriteLine($"Value of @TextField1: {blog.TextField1}");
                    cmd.Parameters.AddWithValue("@TextField2", blog.TextField2);
                    

                    if (blog.ImageField != null && blog.ImageField.Length > 0)
                    {
                        using (var memoryStream = new MemoryStream())
                        {
                            await blog.ImageField.CopyToAsync(memoryStream);
                            byte[] imageBytes = memoryStream.ToArray();
                            cmd.Parameters.AddWithValue("@ImageField", imageBytes);
                        }
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@ImageField", DBNull.Value); // Adjust the parameter name
                    }

                    int rowsAffected = cmd.ExecuteNonQuery();
                    Console.WriteLine($"Rows Affected: {rowsAffected}");
                }

                con.Close();
            }

            return Ok("Blog inserted successfully");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
        }
    }

}
