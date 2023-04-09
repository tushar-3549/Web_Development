const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ['red', 'green', 'pink', 'blue', 'yellow', 'pink'];
body.style.background = 'purple';
button.addEventListener('click', ()=>{
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.background = colors[colorIndex];
})
