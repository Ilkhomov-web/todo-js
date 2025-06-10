// menu oper function 
function openMenu(){
    document.getElementById('mobile-bar').classList.add("active")
    
}
function closeMenu(){
    document.getElementById('mobile-bar').classList.remove('active')
}


//send tasks

const taskName = document.getElementById('taskName');
const taskDescription = document.getElementById('taskDescription');
const taskTime = document.getElementById('taskTime');
const taskImportance = document.getElementById('taskImportance');
const tasks = JSON.parse(localStorage.getItem('task')) || [];
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
    
    
}
console.log(tasks);

