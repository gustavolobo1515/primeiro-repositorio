function gerarSenha() { 
    const tamanho = document.getElementById('tamanhoSenha').value; 
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'; 
    let senha = ''; 
    for (let i = 0; i < tamanho; i++) { 
        const randomIndex = Math.floor(Math.random() * caracteres.length); 
        senha += caracteres[randomIndex]; 
    } 
    document.getElementById('senhaGerada').textContent = senha; 
}