import carton from "./carton.json" assert{type:"json"};

/* cards de carton */


document.getElementById("img-1").innerHTML = carton.platos.map(product => `
<div class="product">
<a href=${product.detalleProducto} target="_blank">
  <img
    class="img"
    src=${product.image}  
    alt="imagen del producto"
  />
  <span
    class="img-description"
    href=${product.detalleProducto}
    >${product.description}</span
  >
</a>
</div>` )