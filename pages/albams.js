const todoslist =document.querySelector("#albamslist")

fetch("https://jsonplaceholder.typicode.com/albums")
.then(res => {
    if (!res.ok) {
        throw new Error("Ошибка сети ");
    }
    return res.json();
})
.then((data) => {
    data.forEach((albams) => {
    const albamsDiv = document.createElement("div");

    albamsDiv.innerHTML = `
     <div class=' shadow-2xl w-[300px] p-2 rounded-md bg-[grey] '>
    <h1 class='text-[yellow] text-[30px] ml-[25px] font-bold '>userId:${albams.userId}</h1>
    <h2 class='text-[green] ml-[20px] text-[25px] font-bold'>id: ${albams.id}</h2>
     <h2 class='text-white ml-[20px] italic text-[16px] font-bold'>title: ${albams.title}</h2>
    
</div>
    
    
    
    `;
    albamslist.appendChild(albamsDiv);
});

})