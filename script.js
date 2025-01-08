var box = document.querySelector(".box")


box.addEventListener('mousemove', ()=> {
    const a = Math.floor(Math.random(1, 100) * 255);
    const b = Math.floor(Math.random(1, 100) * 255);
    const c = Math.floor(Math.random(1, 100) * 255);

    box.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
} )