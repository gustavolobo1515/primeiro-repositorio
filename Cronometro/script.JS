let tempo = 0;
let intervalo;


function iniciarCronometro() {
    // Verifica se o cronômetro já está rodando (intervalo existe)
    if (!intervalo) {
        intervalo = setInterval(() => {
            tempo++;
            document.getElementById('tempo').textContent = tempo;
        }, 1000);
    }
}

function pararCronometro() {
    // Só limpa o intervalo se ele estiver em execução
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;  // Limpa a referência do intervalo
    }
}

function resetarCronometro() {
    tempo = 0;
    document.getElementById('tempo').textContent = tempo;
    // Para o cronômetro, se estiver rodando
    if (intervalo) {
        clearInterval(intervalo);
        intervalo = null;  // Limpa a referência do intervalo
    }
}