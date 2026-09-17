// 1. Seleciona os elementos que vamos usar
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav");

// 2. Escuta o evento de clique no botão
botaoMenu.addEventListener("click", function () {
    // 3. Alterna (liga/desliga) a classe "ativo" no menu
    menu.classList.toggle("ativo");
});