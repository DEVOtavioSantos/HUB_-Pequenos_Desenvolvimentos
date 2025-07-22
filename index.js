const Relogio = document.querySelector('.Relogio');
const H1_timer = document.createElement('h1');
function getDate()
{
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

const timer = setInterval( function(){
    H1_timer.innerText = `Horário Atual: ${getDate()}`;
}, 1000);

Relogio.appendChild(H1_timer)
