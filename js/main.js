import { templates } from "./templates.js";
import { validarFormulario } from "./formValidation.js";

/* ==============================
   NAVEGAÇÃO ENTRE PÁGINAS (SPA)
============================== */
function navigateTo(route) {
  const app = document.querySelector("#app");
  const page = route.replace("/", "") || "home";
  app.innerHTML = templates[page] || templates.home;

  // Recarrega validação se estiver na página de cadastro
  if (page === "cadastro") validarFormulario();

  // Move o foco para o conteúdo principal após carregar a página
  const main = document.querySelector("main");
  if (main) main.focus();
}

/* ==============================
   CONTROLE DE NAVEGAÇÃO (LINKS)
============================== */
document.addEventListener("DOMContentLoaded", () => {
  navigateTo(window.location.pathname);

  document.querySelectorAll("a[data-link]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const path = link.getAttribute("href");
      window.history.pushState({}, "", path);
      navigateTo(path);

      // Fecha menu em mobile ao clicar
      const nav = document.querySelector(".main-nav");
      const menuBtn = document.querySelector(".hamburger");

      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  });

  /* ==============================
     BOTÃO DE ALTO CONTRASTE
  ============================== */
  const contrasteBtn = document.createElement("button");
  contrasteBtn.id = "contrasteBtn";
  contrasteBtn.textContent = "Alto Contraste";
  contrasteBtn.setAttribute("aria-label", "Ativar modo alto contraste");
  contrasteBtn.style.marginLeft = "1rem";
  contrasteBtn.classList.add("contraste-btn");

  // Adiciona o botão ao cabeçalho
  const header = document.querySelector(".header");
  header.appendChild(contrasteBtn);

  // Ação do botão
  contrasteBtn.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    const ativo = document.body.classList.contains("alto-contraste");
    contrasteBtn.setAttribute("aria-pressed", ativo ? "true" : "false");
  });
});

/* ==============================
   SUPORTE AO BOTÃO VOLTAR
============================== */
window.addEventListener("popstate", () => {
  navigateTo(window.location.pathname);
});

/* ==============================
   MENU HAMBÚRGUER ACESSÍVEL
============================== */
window.toggleMenu = function () {
  const nav = document.querySelector(".main-nav");
  const menuBtn = document.querySelector(".hamburger");

  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");

  // Foco no primeiro link ao abrir o menu
  if (isOpen) {
    const firstLink = nav.querySelector("a");
    if (firstLink) firstLink.focus();
  }
};