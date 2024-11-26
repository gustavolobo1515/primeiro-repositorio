function validarFormulario() { 
    const nome = document.getElementById('nome').value; 
    const email = document.getElementById('email').value; 
    const senha = document.getElementById('senha').value; 
    const mensagemErro = document.getElementById('mensagemErro'); 
    mensagemErro.textContent = '';  

    if (!nome) { 
        mensagemErro.textContent = 'Por favor, insira seu nome.'; 
        return false; 
    } 
    if (!email) { 
        mensagemErro.textContent = 'Por favor, insira seu email.'; 
        return false; 
    } 
    if (!senha || senha.length < 6) { 
        mensagemErro.textContent = 'A senha deve ter pelo menos 6 caracteres.'; 
        return false; 
    } 
    alert('Formulário enviado com sucesso!'); 
    return true; 
}