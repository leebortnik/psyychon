// script.js

document.getElementById("startChat").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const reason = document.getElementById("reason").value;
    const urgency = document.getElementById("urgency").value;

    if (name) {
        document.querySelector(".form-section").style.display = "none";
        const chatBox = document.getElementById("chatBox");
        chatBox.style.display = "block";

        const messages = document.getElementById("messages");
        const welcomeMessage = `
            Olá ${name}, você selecionou "${reason}" como motivo e urgência "${urgency}".
            Um profissional estará em breve para te atender.
        `;
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.textContent = welcomeMessage;
        messages.appendChild(messageDiv);
    } else {
        alert("Por favor, preencha seu nome ou pseudônimo.");
    }
});

document.getElementById("sendMessage").addEventListener("click", () => {
    const input = document.getElementById("chatInput");
    const messageText = input.value;

    if (messageText.trim()) {
        const messages = document.getElementById("messages");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.textContent = `Você: ${messageText}`;
        messages.appendChild(messageDiv);
        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
});
