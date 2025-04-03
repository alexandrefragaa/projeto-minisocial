// Simulação de banco de dados
const usuarios = [];

// Exemplo de dados existentes
const usuariosExistentes = ['usuario1', 'usuario2', 'usuario3'];

document.addEventListener('DOMContentLoaded', function () {
    // Lógica para alternar entre celular e email
    document.getElementById('toggleContact').addEventListener('click', function() {
        const contactField = document.getElementById('contact');
        const contactLabel = document.getElementById('contactLabel');
        const toggleButton = document.getElementById('toggleContact');

        // Verifica se os elementos existem antes de tentar acessá-los
        if (!contactField || !contactLabel || !toggleButton) {
            console.error("Um ou mais elementos não foram encontrados.");
            return;
        }

        // Verifica o tipo atual do campo e alterna
        if (contactField.type === 'text') {
            contactField.type = 'email'; // Muda o tipo do campo para email
            contactField.placeholder = 'Digite seu email'; // Altera o placeholder
            contactLabel.innerText = 'Email:'; // Altera o texto do título
            toggleButton.innerText = 'Usar Celular'; // Atualiza o texto do botão
        } else {
            contactField.type = 'text'; // Muda o tipo do campo para text
            contactField.placeholder = 'Digite seu número'; // Altera o placeholder
            contactLabel.innerText = 'Celular:'; // Altera o texto do título
            toggleButton.innerText = 'Usar Email'; // Atualiza o texto do botão
        }
    });

    // Lógica para avançar para a próxima seção do formulário
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            const nome = document.getElementById('usuario').value; // Nome do usuário
            const dataNascimento = document.getElementById('dataNascimento').value; // Data de nascimento
            const contact = document.getElementById('contact').value; // Contato (celular ou email)

            // Verifica se os campos obrigatórios da primeira seção estão preenchidos
            if (nome.trim() && dataNascimento.trim() && contact.trim()) {
                // Ocultar a primeira seção
                document.getElementById('section1').style.display = 'none';
                // Mostrar a segunda seção
                document.getElementById('section2').style.display = 'block';
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    // Lógica para concluir o cadastro
    const finalizarCadastro = document.getElementById('finalizarCadastro');
    if (finalizarCadastro) {
        finalizarCadastro.addEventListener('click', function() {
            const usuario = document.getElementById('usuario2').value; // Nome de usuário
            const senha = document.getElementById('senha').value; // Senha

            // Verifica se os campos obrigatórios da segunda seção estão preenchidos
            if (usuario.trim() && senha.trim()) {
                // Verifica se o nome de usuário já existe
                if (usuariosExistentes.includes(usuario)) {
                    alert('Nome de usuário já existe. Escolha outro.');
                    return;
                }

                // Armazena os dados do novo usuário
                const novoUsuario = {
                    nome: document.getElementById('usuario').value, // Mantém o nome original
                    usuario: usuario,
                    senha: senha,
                    contato: document.getElementById('contact').value,
                    dataNascimento: document.getElementById('dataNascimento').value,
                    mensagens: [],
                    postagensRecentes: [],
                    postagensAntigas: [],
                    fotos: [],
                    videos: [],
                    links: [],
                    postsSalvos: []
                };

                // Adiciona o novo usuário ao array de usuários
                usuarios.push(novoUsuario);
                
                // Adiciona o nome de usuário ao array de nomes existentes para futuras validações
                usuariosExistentes.push(usuario);

                // Exibe mensagem de sucesso
                const mensagemSucesso = document.getElementById('mensagemSucesso');
                mensagemSucesso.innerText = 'Cadastro realizado com sucesso!';
                mensagemSucesso.style.display = 'block';

                // Limpa o formulário
                document.getElementById('formCadastro').reset();
                // Oculta as seções
                document.getElementById('section1').style.display = 'block'; // Volta para a primeira seção
                document.getElementById('section2').style.display = 'none'; // Oculta a segunda seção
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
});