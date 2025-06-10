const d = document;

const contenedor = d.querySelector('.mdc_scroll');
const right = d.querySelector('.right');
const left = d.querySelector('.left');
const mover = 500;

function ScrollIzquierda(){
    contenedor.scrollBy(
        {
        left: -mover,
        behavior: "smooth"
        }
    )
}


function ScrollDerecha(){
    contenedor.scrollBy(
        {
        left: mover,
        behavior: "smooth"
        }
    )
}


left.addEventListener('click', ScrollIzquierda);
right.addEventListener('click', ScrollDerecha);
