const formulario = document.querySelector("form");

const campoCep = formulario.querySelector("#cep");

const campoEndereco = formulario.querySelector("#endereco");

const campoBairro = formulario.querySelector("#bairro");

const campoCidade = formulario.querySelector("#cidade");

const campoEstado = formulario.querySelector("#estado");

const botaoBuscar = document.querySelector("#buscar");

const mensagemStatus = formulario.querySelector("#status");

botaoBuscar.addEventListener("click", function(){
    // Verificando se o cep não tem 9 digitos
    if( campoCep.value.length !== 9){
    // Informando para o usuario sobre o erro
    mensagemStatus.textContent = "Digite um CEP válido";
    mensagemStatus.style.color = "purple";
    // Parar completamente a execução do script
    return;
    }
    // Guardando o valor do cep antigo
    let cepDigitado = campoCep.value;

    // Técnica AJAX - Asycronous JavaScript And XML - técnica de comunicação (transmissão, recebimento) usada entre sistemas e tecnologias diferentes.
    
})  // Final do evento do botão