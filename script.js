let contador = 0

function clicar_botao(caso) {
    var div = document.getElementById("caso" + caso);
    div.style.backgroundColor = "lightgreen";
    contador++;

    if (contador == 8) {
        var botao = document.getElementById("botao_final")
        botao.style.display = "block"
    }
        
}

function mensagem_final() {
    var mensagem = document.getElementById("final")
    mensagem.style.display = "block"
}