let fila = [];
let proximoNumero = 1;

function entrarNaFila() {
    // Gera um número para a pessoa
    let meuNumero = proximoNumero;
    proximoNumero++;
    
    // Adiciona na fila
    fila.push(meuNumero);
    
    // Mostra o resultado
    document.getElementById("meuNumero").textContent = meuNumero;
    document.getElementById("posicao").textContent = "Você é o " + fila.length + "º na fila";
    document.getElementById("resultado").classList.remove("resultado-escondido");
    
    // Atualiza total de pessoas
    document.getElementById("totalPessoas").textContent = fila.length;
}

function sairDaFila() {
    // Remove da fila
    fila.pop();
    
    // Esconde o resultado
    document.getElementById("resultado").classList.add("resultado-escondido");
    
    // Atualiza total
    document.getElementById("totalPessoas").textContent = fila.length;
}