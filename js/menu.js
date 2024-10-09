const botaoMenu = document.querySelector(".titulo-menu a")
const listaDeLinks = document.querySelector(".links-menu")

botaoMenu.addEventListener("click", function(event){
    //Anula o comportamento padrão de recarregar a página
    event.preventDefault();
    listaDeLinks.classList.toggle("aberto");

    if(listaDeLinks.classList.contains("aberto")){
        botaoMenu.innerHTML = "Fechar &times;";
    }
    else {
        botaoMenu.innerHTML = "Menu &equiv;";
    }
});