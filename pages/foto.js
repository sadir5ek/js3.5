
const photosList = document.querySelector("#photosList");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => {
    if (!res.ok) {
      throw new Error("Сетьте ката чыкты");
    }
    return res.json(); 
  })
  .then((data) => {
    const slicedPhotos = data.slice(0, 100); 

    slicedPhotos.forEach((photo) => {
      const photoDiv = document.createElement("div");

      photoDiv.innerHTML = `
        <div class="shadow-2xl w-[300px] p-4 rounded-md bg-yellow-500 mb-4">
          <h1 class="text-blue-600 text-[20px] ml-[20px]">albumId: ${photo.albumId}</h1>
          <h2 class="text-white ml-[20px] text-[18px]">id: ${photo.id}</h2>
          <p class="text-white ml-[20px] italic text-[16px]">title: ${photo.title}</p>
          <!-- Негизги сүрөт -->
          <img src="${photo.url}" alt="Фото" class="w-full h-auto rounded-md mb-4" />
          <!-- Кичинекей сүрөт (Thumbnail) -->
          <p class="text-white ml-[20px] text-[14px]">Thumbnail:</p>
          <img src="${photo.thumbnailUrl}" alt="Thumbnail" class="w-[150px] h-auto rounded-md mb-4" />
        </div>
      `;
      photosList.appendChild(photoDiv);
    });
    console.log(slicedPhotos);  
  })
  .catch((error) => {
    console.error("Каталык чыкты:", error);
  });
