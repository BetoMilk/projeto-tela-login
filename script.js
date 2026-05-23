// Configuração do Login Correto
const USUARIO_CORRETO = "admin";
const SENHA_CORRETA = "1234";

// Pegando os elementos do HTML
const formLogin = document.getElementById('form-login');
const telaLogin = document.getElementById('tela-login');
const telaSucesso = document.getElementById('tela-sucesso');
const telaErro = document.getElementById('tela-erro');

// Evento de envio do formulário
formLogin.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página recarregue

    const usuarioDigitado = document.getElementById('usuario').value;
    const senhaDigitada = document.getElementById('senha').value;

    // Validando o Login
    if (usuarioDigitado === USUARIO_CORRETO && senhaDigitada === SENHA_CORRETA) {
        // LOGIN POSITIVO
        telaLogin.classList.add('escondido');
        telaSucesso.classList.remove('escondido');
    } else {
        // LOGIN NEGATIVO
        telaLogin.classList.add('escondido');
        telaErro.classList.remove('escondido');
        // Adiciona o efeito de piscar no fundo da tela (body)
        document.body.classList.add('piscar-vermelho');
    }
});

// Função para resetar o estado e voltar para a tela de login
function voltar() {
    // Remove o efeito de piscar, caso esteja ativo
    document.body.classList.remove('piscar-vermelho');
    
    // Esconde as telas de resultado
    telaSucesso.classList.add('escondido');
    telaErro.classList.add('escondido');
    
    // Limpa os campos do formulário
    formLogin.reset();
    
    // Mostra a tela de login novamente
    telaLogin.classList.remove('escondido');
}