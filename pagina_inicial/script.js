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
