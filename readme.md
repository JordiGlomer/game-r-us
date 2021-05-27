El objetivo de esta actividad es aprender a utilizar algunos de los eventos disparados por las acciones realizadas con el mouse.

**Descripción**

La empresa GAME-R-US ©️ os ha pedido implementar el prototipo de un juego muy simple en JavaScript. Os proporcionan el código HTML i CSS, y tenéis que implementar las reglas siguientes:

El jugador tiene 3 segundos para hacer clic sobre el círculo de color rojo, que serà seleccionado aleatoriamente.
Una vez que se haya agotado el tiempo el círculo se intercambia con otro.
Si se hace clic dentro del tiempo indicado muestra una alerta con el mensaje: “Has ganado”.

```css

  div>div {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    display: inline-block;
    border-radius: 50px;
  }
 
  .target {
    background-color: red;
  }
```

```html 
<div>
  <div id="1"></div>
  <div id="2"></div>
  <div id="3"></div>
</div>
 
<div>
  <div id="4"></div>
  <div id="5"></div>
  <div id="6"></div>
</div>
 
<div>
  <div id="7"></div>
  <div id="8"></div>
  <div id="9"></div>
</div>
```

**Nota**: *quizás necesites utilizar la propiedad className de un elemento*

**Tips:** El motor del juego es una función con un temporizador setTimeout que llamaría recursivamente a la misma función cada 3s.

