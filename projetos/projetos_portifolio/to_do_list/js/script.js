var inputTarefa = document.querySelector('.input_tarefa')
var button = document.querySelector('.adListin')
var listCompleta = document.querySelector('.list')


let listaItem = []

function addLista (){
    if (inputTarefa.value.trim() === '') {
        alert('O campo de tarefa está vazio. Por favor, insira uma tarefa.');
        return;
    }
  
    listaItem.push({
        tarefa: inputTarefa.value,
        concluida: false
    })

    inputTarefa.value = ''

    mostraTarefa ()
}


function mostraTarefa () {
    let addLi = ''
    

    listaItem.forEach( (tarafa, index) => {
        addLi = addLi + `

            <li class="list_item ${tarafa.concluida && "done"}">
                
            <div class="checkTarefa">
                <img class="check" src="img/checked.png" alt="Chech" onclick="concluir(${index})">
                <p>${tarafa.tarefa}</p>
            </div>
            <img class="btnremove" src="img/trash.png" alt="remove" onclick="remove(${index})">
        
            </li>
        
        `
    } )

    
    listCompleta.innerHTML = addLi
    localStorage.setItem('lista', JSON.stringify(listaItem))
}


function concluir(index){
    listaItem[index].concluida = !listaItem[index].concluida
    
    mostraTarefa()
}



function remove(index){
    listaItem.splice(index, 1)
    mostraTarefa ()
}



function recarregarTarefas(){
    const tarefasAlocadas = localStorage.getItem ('lista')
    if (tarefasAlocadas) {
    listaItem = JSON.parse(tarefasAlocadas)
}

    mostraTarefa ()
}




recarregarTarefas()
button.addEventListener('click', addLista)

 