<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Menú de Pizzas</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #dcdcdc;
      margin: 0;
      padding: 20px;
    }

    h1 {
      text-align: center;
      color: #c0392b;
      margin-bottom: 5px;
    }

    .descripcion {
      text-align: center;
      font-size: 14px;
      color: #333;
      margin-bottom: 30px;
    }

    .menu {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      max-width: 900px;
      margin: 0 auto;
    }

    .item {
      background-color: white;
      padding: 15px;
      border-radius: 5px;
      display: flex;
      gap: 15px;
      align-items: center;
    }

    .item img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 5px;
    }

    .contenido {
      flex: 1;
    }

    .titulo {
      font-size: 18px;
      font-weight: bold;
      text-transform: capitalize;
    }

    .descripcion-item {
      font-size: 14px;
      color: #555;
      margin: 5px 0;
    }

    .precio {
      color: #c0392b;
      font-weight: bold;
      margin-bottom: 10px;
    }

    button {
      background-color: #ddd;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
    }

    .footer {
      text-align: center;
      margin-top: 40px;
      font-size: 14px;
    }

    .footer span {
      color: #e67e22;
    }
  </style>
</head>
<body>
  <h1>Menú</h1>
  <div class="descripcion">
    Pizzas de leña únicas o déjese tentar por nuestras pastas, antipasto, focaccias, ensaladas y platos de Bruschetta.<br>
    Relájese en el agradable ambiente mientras disfruta de los aromas de los hornos de leña o siéntese al aire libre y tome el sol de Mildura.
  </div>

  <div class="menu">
    <div class="item">
      <img src="https://img.freepik.com/foto-gratis/pizza-sabrosa-mesa-madera_23-2147752274.jpg" alt="Original">
      <div class="contenido">
        <div class="titulo">Original</div>
        <div class="descripcion-item">Salsa de tomate, mozzarella y orégano</div>
        <div class="precio">$18.00</div>
        <button>AÑADIR AL CARRITO</button>
      </div>
    </div>
    
    <div class="item">
      <img src="https://img.freepik.com/foto-gratis/pizza-salami-queso-aceitunas-sobre-fondo-madera_123827-20251.jpg" alt="Salami">
      <div class="contenido">
        <div class="titulo">Salami</div>
        <div class="descripcion-item">Salsa de tomate, mozzarella y salami suave</div>
        <div class="precio">$15.00</div>
        <button>AÑADIR AL CARRITO</button>
      </div>
    </div>

    <div class="item">
      <img src="https://img.freepik.com/foto-gratis/pizza-pollo-queso-sobre-mesa-madera_23-2147923244.jpg" alt="Pollo">
      <div class="contenido">
        <div class="titulo">Pollo</div>
        <div class="descripcion-item">Salsa de tomate, mozzarella, pollo, piña* y salsa bbq</div>
        <div class="precio">$25.00</div>
        <button>AÑADIR AL CARRITO</button>
      </div>
    </div>

    <div class="item">
      <img src="https://img.freepik.com/foto-gratis/pizza-hawaiana_74190-5820.jpg" alt="Hawaiano">
      <div class="contenido">
        <div class="titulo">Hawaiano</div>
        <div class="descripcion-item">Salsa de tomate, mozzarella, jamón y piña</div>
        <div class="precio">$16.00</div>
        <button>AÑADIR AL CARRITO</button>
      </div>
    </div>
  </div>

  <div class="footer">
    Imágenes de <span>Freepik</span>
  </div>
</body>
</html>