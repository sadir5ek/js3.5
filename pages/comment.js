const todoslist =document.querySelector("#commentlist")

fetch("https://jsonplaceholder.typicode.com/comments")
.then(res => {
    if (!res.ok) {
        throw new Error("Ошибка сети ");
    }
    return res.json();
})
.then((data) => {
    const slicedcomment = data.slice(0, 100); 

    slicedcomment.forEach((comment) => {
      const commentDiv = document.createElement("div");

    commentDiv.innerHTML = `
     <div class=' shadow-2xl w-[300px] p-2 rounded-md bg-[green] '>
        <h1 class='text-[red] text-[35px] ml-[20px] font-bold '>postId:${comment.postId}</h1>
    <h2 class='text- ml-[20px] text-[30px]'>id: ${comment.id}</h2>
     <h2 class='text-white ml-[20px]  text-[18px] font-bold '>name: ${comment.name}</h2>
     <h2 class='text-[blue] ml-[20px] text-[16px] font-bold'>email: ${comment.email}</h2>    
     <li class='text-[yellow] ml-[20px] italic text-[16px]'>body: ${comment.body}</li>  
</div>
    `;
commentlist.appendChild(commentDiv);
});
console.log(data);

})