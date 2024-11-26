const micButton = document.getElementById("mic-button");
const voiceCommandInput = document.getElementById("voice-command");

// Initialize speech recognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = "en-US";

micButton.addEventListener("click", () => {
  // Start voice recognition when mic is clicked
  recognition.start();
});

recognition.onstart = () => {
  console.log("Voice recognition started...");
  micButton.innerHTML = `<i class="fas fa-microphone-slash"></i>`;
};

recognition.onend = () => {
  console.log("Voice recognition stopped...");
  micButton.innerHTML = `<i class="fas fa-microphone"></i>`;
};

recognition.onresult = (event) => {
  const command = event.results[0][0].transcript;
  voiceCommandInput.value = command;

  // Example: If the user says "login", submit the form
  if (command.toLowerCase().includes("login")) {
    document.getElementById("login-form").submit();
  }
};

recognition.onerror = (event) => {
  console.log("Error occurred in recognition: ", event.error);
};
