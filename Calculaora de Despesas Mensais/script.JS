let total = 0; 
const despesasDiv = document.getElementById('despesas'); 

function adicionarDespesa() { 
    const nome = document.getElementById('nomeDespesa').value; 
    const valor = parseFloat(document.getElementById('valorDespesa').value); 
    if (nome && !isNaN(valor)) { 
        const itemDespesa = document.createElement('div'); 
        itemDespesa.className = 'item-despesa'; 
        itemDespesa.innerHTML = `${nome}: R$ ${valor.toFixed(2)}`; 
        despesasDiv.appendChild(itemDespesa); 

        total += valor; 
        document.getElementById('total').textContent = total.toFixed(2).replace('.', ','); 

        document.getElementById('nomeDespesa').value = ''; 
        document.getElementById('valorDespesa').value = ''; 
    } 
} 