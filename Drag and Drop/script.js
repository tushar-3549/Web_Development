var boxes = document.querySelectorAll(".box");
var image = document.querySelector(".image");
boxes.forEach((box)=>{
    box.addEventListener("dragover", (e)=>{
        e.preventDefault();
        // console.log("dragover image");
        box.classList.add("hovered");
    })
    box.addEventListener("dragleave", (e)=>{
        // console.log("dragleave worked");
        // e.preventDefault();

        box.classList.remove("hovered");
    })
    box.addEventListener("drop", (e)=>{
        // e.preventDefault();

        box.appendChild(image);
        box.classList.remove("hovered");
    })
})