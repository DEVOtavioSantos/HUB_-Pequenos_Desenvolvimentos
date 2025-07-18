const container = document.querySelector('.container')
const card = document.querySelector('.card');
const p = document.createElement('p');
const peso = parseFloat(document.querySelector('.peso').value);
const altura = parseFloat(document.querySelector('.altura').value);

function Calcular()
{
    const peso = parseFloat(document.querySelector('.peso').value);
    const altura = parseFloat(document.querySelector('.altura').value);
    let imc =  peso / (altura * altura);
    
    if (imc < 18.5) {
        p.textContent = `(Baixo peso) IMC: ${imc.toFixed(2)}`;
        p.className = 'atencao';
    } else if (imc >= 18.5 && imc <= 24.99) {
        p.textContent = `(Normal) IMC: ${imc.toFixed(2)}`;
        p.className = 'bom';
    } else if (imc >= 25 && imc <= 29.9) {
        p.textContent = `(Sobrepeso) IMC: ${imc.toFixed(2)}`;
        p.className = 'atencao';
    } else if (imc >= 30 && imc <= 34.9) {
        p.textContent = `(Obesidade Grau 1) IMC: ${imc.toFixed(2)}`;
        p.className = 'perigo';
    } 
    card.appendChild(p)
    
}
function resetar() {
    // Limpa os inputs
    document.querySelector('.peso').value = '';
    document.querySelector('.altura').value = '';

    // Remove o resultado (parágrafo <p>) se existir
    if (card.contains(p)) {
        p.remove();
    }
}


