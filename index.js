// menu oper function 
function openMenu(){
    document.getElementById('mobile-bar').classList.add("active")
    
}
function closeMenu(){
    document.getElementById('mobile-bar').classList.remove('active')
}




const taskName = document.getElementById('taskName');
const taskDescription = document.getElementById('taskDescription');
const taskTime = document.getElementById('taskTime');
const taskImportance = document.getElementById('taskImportance');
const layoutCards = document.getElementById('layout-cards');
const layoutCard = document.getElementById('layout-card');

//send tasks

let tasks = JSON.parse(localStorage.getItem('task')) || [];
const taskRandomId =  Math.random().toString(36).substr(2, 8);

function sendTask(){
event.preventDefault()
    const newTask = {
        id: taskRandomId,
        taskName: taskName.value,
        taskDescription: taskDescription.value,
        taskImportance: taskImportance.value,
        taskTime: taskTime.value
    }
tasks.push(newTask)
localStorage.setItem('task', JSON.stringify(tasks))
    taskName.value = ''
    taskDescription.value = ''
    taskImportance.value = ''
    taskTime.value = ''
    alert('Task Muffaqiyatli qoshildi')
    location.reload()
    
}

function taskDelete(id) {
  const element = document.querySelector(`.layout-card[data-id='${id}']`);
  if (element) {
    element.remove(); 
  }
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('task', JSON.stringify(tasks));
  location.reload()
}
tasks.map((item) => {
  layoutCards.innerHTML += `
    <div class="layout-card" data-id="${item.id}">
      <p>Id:${item.id}</p>
      <h3>${item.taskName}</h3>
      <p class="desc">${item.taskDescription}</p>
      <p class="status">${item.taskImportance}</p>
      <p class="time">${item.taskTime}</p>
      <div class="btnGroup">
        <button class="comp" onclick="taskComplete('${item.id}')">
          <span class="material-symbols-outlined"> task_alt </span>
        </button>
        <button class="del" onclick="taskDelete('${item.id}')">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>`;
});


//complete task
function taskComplete(id){
  const element = document.querySelector(`.layout-card[data-id='${id}']`);
  if(element){
    element.classList.add('compCard')
  }
  console.log('task id:', id, element);
  
}