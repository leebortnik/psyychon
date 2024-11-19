function buscarEndereco() {
    let cep = document.getElementById('cep').value.replace('-', '');
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('uf').value = data.uf;
          } else {
            alert('CEP não encontrado');
          }
        })
        .catch(() => alert('Erro ao buscar o CEP'));
    }
  }
  
  document.getElementById('formAluno').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro de Aluno realizado com sucesso!');
  });
  
  document.getElementById('formResponsavel').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro de Responsável realizado com sucesso!');
  });
  