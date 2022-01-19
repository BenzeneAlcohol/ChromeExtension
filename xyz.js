console.log(window.location.hostname);

chrome.storage.local.get("todos", function(local){
    todosSaves = local.todos
    console.log(todosSaves)
    todosSaves.map((todos)=>{
        console.log(todos.text);
        if(todos.text===window.location.hostname){
            document.body.innerHTML="GONE";
        }
    })
})