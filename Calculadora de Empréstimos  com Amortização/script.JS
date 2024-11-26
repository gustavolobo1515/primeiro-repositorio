function calcularEmprestimo() { 
    const principal = parseFloat(document.getElementById('principal').value); 
    const taxa = parseFloat(document.getElementById('taxa').value) / 100 / 12; 
    const tempo = parseInt(document.getElementById('tempo').value) * 12; 

    const pagamentoMensal = (principal * taxa) / (1 - Math.pow(1 + taxa, -tempo)); 
    document.getElementById('pagamentoMensal').textContent = pagamentoMensal.toFixed(2); 

    let saldoDevedor = principal; 
    let tabela = `
        <h3>Tabela de Amortização</h3>
        <table>
            <tr>
                <th>Parcela</th>
                <th>Principal</th>
                <th>Juros</th>
                <th>Saldo</th>
        </tr>
    `; 
    for (let i = 1; i <= tempo; i++) { 
        const juros = saldoDevedor * taxa; 
        const principalParcela = pagamentoMensal - juros; 
        saldoDevedor -= principalParcela; 
        tabela += `
            <tr>
                <td>${i}</td>
                <td>${principalParcela.toFixed(2)}</td>
                <td>${juros.toFixed(2)}</td>
                <td>${saldoDevedor.toFixed(2)}</td>
            </tr>
        `; 
    } 
    tabela += '</table>'; 
    document.getElementById('tabelaAmortizacao').innerHTML = tabela; 
} 