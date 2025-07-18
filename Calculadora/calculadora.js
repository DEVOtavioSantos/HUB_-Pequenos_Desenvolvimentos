function adicionar(valor)
{
    document.querySelector('.display').value += valor;
}

function Calcular()
{
    try{
        let resultado = eval(document.querySelector('.display').value);
        document.querySelector('.display').value = resultado
   }catch {
        document.querySelector('.display').value = 'Erro'
   }
}

function Limpar()
{
    document.querySelector('.display').value = ''
}

function AlterarCores()
{
    
    const CorCalculadora = document.getElementById('corcalculadora').value;
    

    const templete = document.querySelector('.templete');
    templete.style.backgroundColor = CorCalculadora;
    
    
    
    

}