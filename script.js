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

/* function saveStorage() {
  const listLi = queryAll('.task');
  const taskList = [];
  listLi.for
  const values = listLi.innerHt;
  console.log(values);
  // const liValues = listLi.map((li) => li);
  // localStorage.setItem('list', JSON.stringify({ xablau: { listLi.innerText }}));
}

 */
function createTaskByList(input, value) {
  const classes = value.trim().split(' ');
  if (classes) {
    const newTask = document.createElement('li');
    classes.forEach((c) => {
      newTask.classList.add(c);
    });
    newTask.innerText = input;
    setChecked(newTask);
    setColor(newTask);
    list.appendChild(newTask);
  }
}
function saveStorage() {
  localStorage.clear();
  const tasksToSave = list.querySelectorAll('li');
  const taskList = [];
  tasksToSave.forEach((e) => {
    taskList.push(`${e.innerText}|${e.classList}`);
  });
  const tasksJSON = JSON.stringify(taskList);
  localStorage.setItem('tasks', tasksJSON);
}
query('#salvar-tarefas').addEventListener('click', saveStorage);

function returnSavedTasks() {
  const localTasks = localStorage.getItem('tasks');
  const tasksList = JSON.parse(localTasks);
  if (localStorage.getItem('tasks') !== null) {
    tasksList.forEach((e) => {
      const names = e.split('|');
      createTaskByList(names[0], names[1]);
    });
  }
}
returnSavedTasks();
