const inputtask = document.querySelector('.input-task');
const btntask = document.querySelector('.btn-task');
const tasklist = document.querySelector('.tasklist');
const li = document.createElement('li');

function criaLi() {
    const li = document.createElement('li');
    return li;
}


function GeraTarefa(texto) {
    const li = criaLi();
    li.innerText = texto;
    tasklist.append(li)
    inputtask.value = ''
    inputtask.focus();
    CriaButao(li)
    SalvarTarefas();
}

btntask.addEventListener('click', function(e) {
    if(!inputtask.value) return;
    GeraTarefa(inputtask.value)

})

inputtask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if(!inputtask.value) return;
        GeraTarefa(inputtask.value)
        
    }
})

function CriaButao(li) {
    li.innerText += '';
    const botao = document.createElement('button');
    botao.innerText = 'apagar';
    botao.classList.add('apagar')
    botao.classList.add('btn-Style');
    li.appendChild(botao)
}

document.addEventListener('click' , function (e) {
    const el = e.target;
    
    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        SalvarTarefas()
    }
})

function SalvarTarefas() {
    const liTarefas = tasklist.querySelectorAll('li');
    const ListaDasTarefas = [];


    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        ListaDasTarefas.push(tarefaTexto);
        
    }

    const TaskJson = JSON.stringify(ListaDasTarefas);
    localStorage.setItem('tarefas', TaskJson)
}

function TasksSalvas() {
    const tasks = localStorage.getItem('tarefas');
    const ListTasks = JSON.parse(tasks);

    for(tarefa of ListTasks) {
        GeraTarefa(tarefa)
    }
}

TasksSalvas();
