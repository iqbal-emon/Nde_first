
using System.Text.Json.Serialization;

namespace Nde1st.Model
{
    public class ndeFirst
    {
        public string TextField1 { get; set; }
        public string TextField2 { get; set; }
        public IFormFile ImageField { get; set; }
        
        public byte[]? ImageField1 { get; set; }
      

    }

    
}
