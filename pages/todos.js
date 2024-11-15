const todoslist =document.querySelector("#todoslist")

fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => {
    if (!res.ok) {
        throw new Error("Ошибка сети ");
    }
    return res.json();
})
.then((data) => {
    data.forEach((todo) => {
    const todoDiv = document.createElement("div");

    todoDiv.innerHTML = `
     <div class=' shadow-2xl w-[300px] p-2 rounded-md bg-[red] '>
    <h1 class='text-[blue] text-[25px] ml-[20px] font-bold '>userId:${todo.userId}</h1>
    <h2 class='text-white ml-[20px] text-[20px] font-bold'>id: ${todo.id}</h2>
     <li class='text-[yellow] ml-[20px] italic text-[16px] '>title: ${todo.title}</li>
     <li class='text-[yellow] ml-[20px] italic text-[16px]'>completed: ${todo.completed}</li>
</div>
    
    
    
    `;
    todoslist.appendChild(todoDiv);
});
console.log(data);

})