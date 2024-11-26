function permitirSoltar(event) {
    event.preventDefault(); // Permite que os elementos sejam soltos
}

function arrastar(event) {
    event.dataTransfer.setData("text", event.target.id); // Define os dados transferidos como o ID do item arrastado
}

function soltar(event) {
    event.preventDefault();
    const dados = event.dataTransfer.getData("text"); // Recupera o ID do item arrastado
    const tarefaArrastada = document.getElementById(dados);
    
    // Verificar se o target é a lista ou outro item
    if (event.target.id === 'listaTarefas') {
        event.target.appendChild(tarefaArrastada);
    } else if (event.target.classList.contains('item-tarefa')) {
        // Inserir a tarefa antes do item onde foi solta
        event.target.parentNode.insertBefore(tarefaArrastada, event.target);
    }
}

function adicionarTarefa() {
    const textoTarefa = document.getElementById('novaTarefa').value.trim(); // Obtém e remove espaços do texto da tarefa
    if (textoTarefa) {
        const tarefa = document.createElement('div'); // Cria um novo elemento para a tarefa
        tarefa.id = `tarefa-${Date.now()}`; // Define um ID único
        tarefa.className = 'item-tarefa'; // Adiciona a classe
        tarefa.draggable = true; // Torna o item arrastável
        tarefa.ondragstart = arrastar; // Vincula o evento de arrastar
        tarefa.textContent = textoTarefa; // Adiciona o texto da tarefa

        document.getElementById('listaTarefas').appendChild(tarefa); // Adiciona a nova tarefa à lista
        document.getElementById('novaTarefa').value = ''; // Limpa o campo de entrada
    }
}
