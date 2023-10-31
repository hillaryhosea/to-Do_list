
window.addEventListener("load", ()=>{

   todos = JSON.parse(localStorage.getItem("todos")) ||[];

   const nameInput = document.querySelector("#name")
   const newTodoForm = document.querySelector("#new-todo-form")

   const userName = localStorage.getItem("username") || "";

   nameInput.value = userName;

   nameInput.addEventListener("change", e =>{
      localStorage.setItem("username", e.target.value)
   })

   newTodoForm.addEventListener("submit", e =>{
      e.preventDefault()

      const todo = {
         content: e.target.element.content.value,
         category: e.target.element.category.value,
         done: false,
         createdAt: new Date().getTime()
      }

      todos.push(todo);

      localStorage.setItem("todos", JSON.stringify("todos"));

      e.target.reset()
   })
   
} )




