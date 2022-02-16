const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const list = query('#lista-tarefas');
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
  list.innerText = '';
}
query('#apaga-tudo').addEventListener('click', clearList);

function removeDone() {
  const selected = queryAll('.completed');
  for (let i = 0; i < selected.length; i += 1) {
    list.removeChild(selected[i]);
  }
}
query('#remover-finalizados').addEventListener('click', removeDone);
