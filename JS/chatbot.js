fetch('ChatbotExternal/index.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('chatbot-box').innerHTML = html;

    // Load emoji-mart library first
    const emojiScript = document.createElement('script');
    emojiScript.src = "https://cdn.jsdelivr.net/npm/emoji-mart@latest/dist/browser.js";
    emojiScript.onload = () => {
      // Load chatbot's script
      const botScript = document.createElement('script');
      botScript.src = 'ChatbotExternal/script.js';
      botScript.onload = () => {
        // Auto-open after 1 minute
        setTimeout(() => {
          document.body.classList.add("show-chatbot");
        }, 6000); // 600 ms = 1 minute
      };
      document.body.appendChild(botScript);
    };
    document.body.appendChild(emojiScript);
  });
