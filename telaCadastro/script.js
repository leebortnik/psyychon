// // script.js

// let alunoID;
// let alunoCadastrado = false;

// function showPage(pageId) {
//   document.getElementById("alunoPage").style.display = pageId === "alunoPage" ? "block" : "none";
//   document.getElementById("responsavelPage").style.display = pageId === "responsavelPage" ? "block" : "none";
//   document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
//   document.querySelector(`.tab[onclick="showPage('${pageId}')"]`).classList.add("active");
// }

// function cadastrarAluno() {
//   if (alunoCadastrado) return;

//   const nomeAluno = document.getElementById("nomeAluno");
//   const matricula = document.getElementById("matricula");
//   const emailAluno = document.getElementById("emailAluno");
//   const senhaAluno = document.getElementById("senhaAluno");

//   let valid = true;

//   // Validação dos campos de aluno
//   [nomeAluno, matricula, emailAluno, senhaAluno].forEach((input) => {
//     const errorMsg = document.getElementById(input.id + "Error");
//     if (input.value.trim() === "") {
//       errorMsg.style.display = "block";
//       input.classList.add("error");
//       valid = false;
//     } else {
//       errorMsg.style.display = "none";
//       input.classList.remove("error");
//     }
//   });

//   if (!valid) return;

//   // Gerar ID do aluno e bloquear o botão de cadastro
//   alunoID = "ID" + Math.floor(1000 + Math.random() * 9000);
//   alunoCadastrado = true;
//   document.getElementById("alunoId").innerText = "ID do Aluno: " + alunoID;
//   document.getElementById("alunoSuccess").innerText = "Aluno cadastrado com sucesso!";
//   document.getElementById("cadastrarAlunoBtn").disabled = true;
// }

// function cadastrarResponsavel() {
//   const nomeResponsavel = document.getElementById("nomeResponsavel");
//   const emailResponsavel = document.getElementById("emailResponsavel");
//   const idAlunoResponsavel = document.getElementById("idAlunoResponsavel");
//   const senhaResponsavel = document.getElementById("senhaResponsavel");

//   let valid = true;

//   // Validação dos campos de responsável
//   [nomeResponsavel, emailResponsavel, idAlunoResponsavel, senhaResponsavel].forEach((input) => {
//     const errorMsg = document.getElementById(input.id + "Error");
//     if (input.value.trim() === "") {
//       errorMsg.style.display = "block";
//       input.classList.add("error");
//       valid = false;
//     } else {
//       errorMsg.style.display = "none";
//       input.classList.remove("error");
//     }
//   });

//   if (!valid) return;

//   // Verificação de ID do aluno
//   if (idAlunoResponsavel.value !== alunoID) {
//     alert("ID do Aluno incorreto!");
//     return;
//   }

//   document.getElementById("responsavelSuccess").innerText = "Responsável cadastrado com sucesso!";
// }
