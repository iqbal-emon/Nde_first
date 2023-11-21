document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    var userInput = document.getElementById('user-input');
    var message = userInput.value;

    if (message.trim() !== '') {
      appendMessage('User', message);
      userInput.value = ''; // Clear the input field

      // Simulate a simple bot response after a short delay
      setTimeout(function () {
        var botResponse = 'I am a simple bot. You said: ' + message;
        appendMessage('Bot', botResponse);
      }, 500);
    }
  }

  function appendMessage(sender, message) {
    var chatBox = document.getElementById('chat-box');
    var messageElement = document.createElement('div');
    messageElement.className = sender === 'User' ? 'user-message' : 'bot-message';
    messageElement.textContent = sender + ': ' + message;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }