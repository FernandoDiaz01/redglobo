import plasticos from "./plasticos.json" assert{type:"json"};

/* cards de plasticos */


document.getElementById("img-1").innerHTML = plasticos.bandeja.map(product => `
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