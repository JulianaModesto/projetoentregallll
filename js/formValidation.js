import { salvarDados } from "./storage.js";

export function validarFormulario() {
  const form = document.querySelector("#cadastroForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();
    const cpf = document.querySelector("#cpf").value.trim();

    const msg = document.querySelector("#msgForm");

    // Validações simples
    if (!nome || !email || !telefone || !cpf) {
      msg.textContent = "Por favor, preencha todos os campos obrigatórios.";
      msg.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      msg.textContent = "E-mail inválido.";
      msg.style.color = "red";
      return;
    }

    // Salva os dados no localStorage
    const voluntario = { nome, email, telefone, cpf };
    salvarDados("voluntarios", voluntario);

    msg.textContent = "Cadastro enviado com sucesso! Obrigado por se voluntariar 💖";
    msg.style.color = "green";
    form.reset();
  });
}