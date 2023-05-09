const form = document.querySelector('#task-form')
form.addEventListener('submit', (e)=>{
  let task = document.getElementById('task').value
  // console.log(task);
  let tasks = [];
  localStorage.setItem("task", tasks) 

  e.preventDefault()
})