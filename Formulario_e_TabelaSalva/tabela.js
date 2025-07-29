document.addEventListener('DOMContentLoaded', function() {
    const tabela = document.querySelector('.tabela')

    const DadosJSON = localStorage.getItem('Funcionarios')  

    if(DadosJSON) {
        
        const funcionarios = JSON.parse(DadosJSON);


        funcionarios.forEach(funcionario => {
            const linha = document.createElement('tr');

            linha.innerHTML = `
            <td>${funcionario.nome}</td>
            <td>${funcionario.email}</td>
            <td>${funcionario.senha}</td>
            <td>${funcionario.cargo}</td>
            `;
            const botao = document.createElement('button');
            botao.innerText = 'apagar';

            tabela.appendChild(linha)
        });

    } else {
        tabela.innerHTML = `<p class="N_encontro"> Não posivél achar nenhum Cadastro</p>`
    }
})


