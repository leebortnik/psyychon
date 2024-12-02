// Função para exibir o carregamento
function showLoader() {
  document.getElementById('loader').style.display = 'flex';
  document.getElementById('content').style.display = 'none';
}

// Função para esconder o carregamento
function hideLoader() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

// Função de login
function login() {
  showLoader(); // Mostra o loader antes de redirecionar

  setTimeout(function() {
    // Simula o redirecionamento após o login
    window.location.href = '/pagina_inicial/inicial.html';
    hideLoader(); // Esconde o loader após o redirecionamento
  }, 2000); // Tempo de espera para simular o carregamento (2 segundos)
}

// Função para "Fale com um profissional"
function faleComProfissional() {
  showLoader(); // Mostra o loader ao clicar no link

  setTimeout(function() {
    // Redireciona para a página de contato com o profissional
    window.location.href = '/Atendimento/atendimento.html';
    hideLoader(); // Esconde o loader após o redirecionamento
  }, 2000); // Tempo de espera para simular o carregamento (2 segundos)
}
