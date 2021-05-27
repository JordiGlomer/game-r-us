const circulos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let revelarColor = (evento, rojo) => {
    comprobarColor(evento, rojo);
    alert(evento.target.value);
};

/*let id = document.querySelector('#*');
circulos.forEach(elemento => {
    circulo.value = elemento;
    elemento.circulos.backgroundColor = 'red';
    circulos.addEventListener('click', (evento) =>
        revelarColor(evento, rojo));
    id.appendChild(circulo);
});*/

let i = 0;
let id = setTimeout(() => pintar(circulos), 3000);
let pintar = (circulos) => {
    if (i < circulos.length) {
        alert('Hey you! ' + circulos[i]);
        i++;
    } else {
        clearTimeout(id);
    }
};
/*const div = document.querySelector('div');
div.className = 'red';
id = setTimeout(() => init(circulos), 3000);
div.style.backgroundColor = 'white';

let init = () => {
    let div = document.querySelector('.target');
    let rojo;
    generarColor();
    generarRojo(rojo);
};*/


let generarRojo = () => {
    let indexCirculos =
        Math.floor(Math.random() * circulos.length);
    return circulos[indexCirculos];
};

let generarColor = (contenedor) => {
    rojo = generarRojo();
    contenedor.backgroundColor = 'red';
};

let comprobarColor = (evento, rojo) => {
    if (generarRojo == onclick && generarRojo < 3000) {
        alert("LO HAS CAZADO!!");
    } else {
        alert("Intentalo otra vez");
    }
};
window.addEventListener('load', init);