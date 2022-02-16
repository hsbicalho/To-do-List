const query = document.querySelector.bind(document);

function setColor(task) {
  task.addEventListener('click', (event) => {
    if (query('.setColorGrey')) {
      query('.setColorGrey').classList.remove('setColorGrey');
    }
    event.target.classList.add('setColorGrey');
  });
}
function setChecked(task) {
  task.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}

function adicionaTarefa() {
  const button = query('#criar-tarefa');
  const list = query('#lista-tarefas');
  button.addEventListener('click', () => {
    const newList = document.createElement('li');
    newList.className = 'task';
    newList.innerText = query('#texto-tarefa').value;
    list.appendChild(newList);
    setColor(newList);
    setChecked(newList);
    query('#texto-tarefa').value = '';
  });
}
adicionaTarefa();

function clearList() {
  query('#lista-tarefas').innerText = '';
}
query('#apaga-tudo').addEventListener('click', clearList);
