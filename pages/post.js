const postlist =document.querySelector("#postlist")

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => {
    if (!res.ok) {
        throw new Error("Ошибка сети ");
    }
    return res.json();
})
.then((data) => {
    data.forEach((post) => {
    const postDiv = document.createElement("div");

    postDiv.innerHTML = `
     <div class=' shadow-2xl w-[300px] p-2 rounded-md bg-[black] '>
    <h1 class='text-white text-[25px] ml-[25px] font-bold '>userId:${post.userId}</h1>
    <h2 class='text-white ml-[20px] text-[20px] font-bold'>id: ${post.id}</h2>
     <h2 class='text-white ml-[20px] italic text-[16px] font-bold'>title: ${post.title}</h2>
     <li class='text-white ml-[20px] italic text-[16px]'>body: ${post.body}</li>
</div>
    
    
    
    `;
    postlist.appendChild(postDiv);
});
console.log(data);

})