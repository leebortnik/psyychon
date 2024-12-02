// Simulando dados do usuário (pode ser obtido de um banco de dados)
localStorage.setItem("userName", "Letícia"); // Exemplo de nome do usuário
const userName = localStorage.getItem("userName") || "Visitante";

function exibirSaudacao() {
    const nome = localStorage.getItem('nome');
    const tipo = localStorage.getItem('tipo');
  
    if (nome && tipo) {
      const saudacao = document.getElementById('saudacao');
      saudacao.textContent = `Oi, ${nome}! Você é um ${tipo === 'aluno' ? 'Aluno' : 'Responsável'}.`;
    }
}

 // Função para abrir o modal
 function openModal(modalId) {
  document.getElementById(modalId).classList.add("show");
}

// Função para fechar o modal
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("show");
}

// Eventos para abrir os modais
document.getElementById("privacy-link").addEventListener("click", function (e) {
  e.preventDefault();
  openModal("privacyModal");
});

document.getElementById("terms-link").addEventListener("click", function (e) {
  e.preventDefault();
  openModal("termsModal");
});
