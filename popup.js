  const form = document.getElementById("form");
  const todoInput = document.getElementById('input');
  const todosList = document.getElementById("todos");
  
  function addToDo(todo) {
      let todoText = todoInput.value;
      if(todo) {
          todoText = todo.text;
      }
      if(todoText) {
          const todoEl = document.createElement('li');
          if(todo && todo.completed) {
              todoEl.classList.add('completed');
          }
          todoEl.innerText = todoText;
          todoEl.addEventListener('click', () => {
              todoEl.classList.toggle('completed');
              updateChromeStorage();
          });
          todoEl.addEventListener('contextmenu', (eve) => {
              eve.preventDefault();
              todoEl.remove();
              updateChromeStorage();
          });
          todosList.appendChild(todoEl);
          todoInput.value = '';
          updateChromeStorage();
      }
  }
  
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      addToDo();
  });
  
  function updateChromeStorage() {
      const todosEl = document.querySelectorAll('li');
      const todos = [];
      todosEl.forEach(todoEl => {
          todos.push({
              text: todoEl.innerText,
              completed: todoEl.classList.contains('completed')
          });
      });
      chrome.storage.local.set({todos});
  }
  
  let todosSaves;

  chrome.storage.local.get("todos", function(local){
    todosSaves = local.todos
    console.log(todosSaves)
    if(todosSaves) {
        todosSaves.forEach(todo => addToDo(todo));
    }
});
  