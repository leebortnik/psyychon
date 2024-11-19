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
      feedback.textContent = `Obrigado por compartilhar seu humor: ${mood}. Seu responsável será notificado.`;
      feedback.classList.remove('hidden');
      sendEmailNotification(mood);
    });
  
    // Função para simular o envio de notificação por email
    function sendEmailNotification(mood) {
      // Simulação de envio de email (aqui seria implementado um backend real)
      console.log(`Notificação enviada ao responsável sobre o humor: ${mood}`);
    }
  });
  