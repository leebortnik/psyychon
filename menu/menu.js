document.addEventListener('DOMContentLoaded', () => {
  // Exibição do menu após cadastro ou login
  const menu = document.getElementById('menu');
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // Editar dados pessoais
  const editButton = document.getElementById('editButton');
  const editForm = document.getElementById('editForm');
  const saveButton = document.getElementById('saveButton');
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');

  editButton.addEventListener('click', () => {
    editForm.classList.remove('hidden');
  });

  saveButton.addEventListener('click', () => {
    const newName = document.getElementById('newName').value;
    const newEmail = document.getElementById('newEmail').value;
    userName.textContent = newName || userName.textContent;
    userEmail.textContent = newEmail || userEmail.textContent;
    editForm.classList.add('hidden');
  });

  // Submissão do humor
  const submitMoodButton = document.getElementById('submitMood');
  const feedback = document.getElementById('feedback');
  
  submitMoodButton.addEventListener('click', () => {
    const mood = document.getElementById('moodSelect').value;
    
    // Exibe a mensagem de agradecimento
    feedback.textContent = `Obrigado por compartilhar seu humor: ${mood}. Seu responsável será notificado.`;
    feedback.classList.remove('hidden');

    // Envia o humor para o backend (Node.js)
    sendMoodToBackend(mood);
  });

  // Função para enviar o humor ao backend usando Fetch
  function sendMoodToBackend(mood) {
    fetch('http://localhost:3001/api/mood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mood }), // Envia o valor do humor como JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Exibe a resposta do backend (mensagem)
      })
      .catch((error) => {
        console.error('Erro ao enviar humor:', error);
      });
  }
});
