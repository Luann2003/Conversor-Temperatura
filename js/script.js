const trocarConversaoBtn = document.getElementById("trocarConversao");
const grausInput = document.getElementById("graus");
var resposta = document.getElementById("res")

document.getElementById("trocarConversao").addEventListener("click", function() {
    if (grausInput.placeholder === "ºC") {
        grausInput.placeholder = "ºF";
    } else {
        // Se for Fahrenheit (ou qualquer outro), mude para Celsius
        grausInput.placeholder = "ºC";
    }
});

function converter(){
    if(grausInput.placeholder === "ºC"){
        var soma = (grausInput.value * 1.8) + 32
        resposta.innerHTML = `A temperatura é ${Math.round(soma)}º Fahrenheit`
    }else{
        var soma = (grausInput.value -32) * 0.5555
        resposta.innerHTML = `A temperatura é ${Math.round(soma)}º Celsius`
    }
    grausInput.value = ''
    grausInput.focus()
}