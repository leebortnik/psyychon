// Alterna entre formulários de Aluno e Responsável
function toggleForms(type) {
  document.getElementById('formAluno').style.display = type === 'aluno' ? 'block' : 'none';
  document.getElementById('formResponsavel').style.display = type === 'responsavel' ? 'block' : 'none';
}

// Gera um ID único permanente
function gerarIDAluno() {
  return 'ID-' + Math.random().toString(36).substr(2, 8).toUpperCase();
}

// Cadastra o Aluno
function cadastrarAluno(event) {
  event.preventDefault();

  const nome = document.getElementById('nomeAluno').value.trim();
  const email = document.getElementById('emailAluno').value.trim();
  const senha = document.getElementById('senhaAluno').value.trim();

  // Valida os campos
  if (!nome || !email || !senha) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  // Verifica se o aluno já está cadastrado
  if (!localStorage.getItem('alunoID')) {
    const alunoID = gerarIDAluno();

    // Salva os dados no localStorage
    localStorage.setItem('alunoID', alunoID);
    localStorage.setItem('nomeAluno', nome);
    localStorage.setItem('emailAluno', email);
    localStorage.setItem('senhaAluno', senha);

    alert(`Cadastro realizado com sucesso! Seu ID é: ${alunoID}`);
  }

  // Redireciona para a tela inicial
  window.location.href = 'inicial.html';
}

// Cadastra o Responsável
function cadastrarResponsavel(event) {
  event.preventDefault();

  const nome = document.getElementById('nomeResponsavel').value.trim();
  const email = document.getElementById('emailResponsavel').value.trim();
  const senha = document.getElementById('senhaResponsavel').value.trim();
  const idAluno = document.getElementById('idAluno').value.trim();

  // Valida os campos
  if (!nome || !email || !senha || !idAluno) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  // Verifica se o ID do aluno é válido
  const alunoID = localStorage.getItem('alunoID');
  if (idAluno !== alunoID) {
    alert('ID do Aluno inválido. Verifique e tente novamente.');
    return;
  }

  // Salva os dados do responsável
  localStorage.setItem('nomeResponsavel', nome);
  localStorage.setItem('emailResponsavel', email);
  localStorage.setItem('senhaResponsavel', senha);

  alert('Cadastro realizado com sucesso!');
}
