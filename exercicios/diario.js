function submitFeelings() {
    const feelings = document.getElementById('feelings').value;
    if (feelings.trim() === "") {
        alert("Por favor, escreva algo antes de enviar!");
    } else {
        alert("Sentimentos enviados com sucesso!");
        document.getElementById('feelings').value = ""; // Limpa o campo
    }
}
