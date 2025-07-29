function Funcionario(nome, email, senha, cargo)
{
    this.nome = nome
    this.email = email
    this.senha = senha
    this.cargo = cargo
}


const form = document.querySelector('.form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    CadastrarFuncionarios()
    
})

function CadastrarFuncionarios()
{
    const nome = document.querySelector('.nome_input').value
    const email = document.querySelector('.email_input').value;
    const senha = document.querySelector('.senha_input').value;
    const cargo = document.querySelectorAll('input[name="cargos"]');
    let CargoSelect;

    for(const radioButton of cargo) {
        if (radioButton.checked) {
            CargoSelect = radioButton.value
        }
    }

    
    


    let funcionarios = JSON.parse(localStorage.getItem('Funcionarios')) || [];
    funcionarios.push(new Funcionario(nome, email, senha, CargoSelect));

    

    const TableCargo = JSON.stringify(funcionarios)
    localStorage.setItem('Funcionarios',JSON.stringify(funcionarios))
    Resetar()
} 

function Resetar()
{
    document.querySelector('.nome_input').value = ''
    document.querySelector('.email_input').value = ''
    document.querySelector('.senha_input').value = ''
}
