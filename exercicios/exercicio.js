// Função para iniciar o exercício de respiração
function startBreathingExercise() {
  alert("Inicie o exercício de respiração 4-7-8: Inspire por 4 segundos, segure por 7 e expire por 8.");
}

// Função para iniciar o exercício de meditação (abre um link de vídeo do YouTube)
function iniciarMeditacao() {
  window.open("https://www.youtube.com/watch?v=1vx8iUvfyCY", "_blank"); // Exemplo de link para meditação guiada
}

// Função para iniciar os alongamentos (simples, apenas uma mensagem de alerta)
function startStretching() {
  alert("Faça alongamentos leves, movimente seus braços, pescoço e pernas.");
}

// Função para redirecionar para a página do diário de gratidão
function openGratitudeJournal() {
  window.location.href = "escrever.html"; // A página onde o usuário pode escrever
}

// Função para redirecionar para uma playlist do Spotify
function iniciarMusica() {
  window.open("https://open.spotify.com/playlist/SEU_CODIGO_DE_PLAYLIST", "_blank"); // Substitua pelo seu código de playlist
}
