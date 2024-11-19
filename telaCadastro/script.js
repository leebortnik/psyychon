function showForm(type) {
  document.getElementById('form-aluno').classList.add('hidden');
  document.getElementById('form-responsavel').classList.add('hidden');
  document.getElementById(`form-${type}`).classList.remove('hidden');
  document.getElementById('after-cadastro').classList.add('hidden');
  document.getElementById('loading').classList.add('hidden');
}

function submitForm(type) {
  const formData = {};
  let valid = true;

  if (type === 'aluno') {
      formData.nome = document.getElementById('nome-aluno').value.trim();
      formData.matricula = document.getElementById('matricula-aluno').value.trim();
      formData.nascimento = document.getElementById('nascimento-aluno').value.trim();
      formData.email = document.getElementById('email-aluno').value.trim();
      formData.senha = document.getElementById('senha-aluno').value.trim();

      if (!formData.nome || !formData.matricula || !formData.nascimento || !formData.email || !formData.senha) {
          valid = false;
          alert("Por favor, preencha todos os campos!");
      } else {
          formData.idGerado = `ID-${Math.floor(Math.random() * 10000)}`;
          document.getElementById('id-gerado').innerText = `Seu ID: ${formData.idGerado}`;
      }
  } else if (type === 'responsavel') {
      formData.nome = document.getElementById('nome-responsavel').value.trim();
      formData.email = document.getElementById('email-responsavel').value.trim();
      formData.idAluno = document.getElementById('id-aluno').value.trim();
      formData.senha = document.getElementById('senha-responsavel').value.trim();

      if (!formData.nome || !formData.email || !formData.senha) {
          valid = false;
          alert("Por favor, preencha os campos obrigatórios!");
      }
  }

  if (valid) {
      document.getElementById('form-aluno').classList.add('hidden');
      document.getElementById('form-responsavel').classList.add('hidden');
      document.getElementById('after-cadastro').classList.remove('hidden');
  }
}

function redirect() {
  document.getElementById('after-cadastro').classList.add('hidden');
  document.getElementById('loading').classList.remove('hidden');
  setTimeout(() => {
      window.location.href = "/pagina_inicial/inicial.html"; // Redirecionar após validação
  }, 2000);
}
