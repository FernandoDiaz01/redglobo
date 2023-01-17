import telgopor from "./telgopor.json" assert { type: "json" };

/* cards de telgopor */

document.getElementById("img-1").innerHTML = telgopor.bandeja.map(
  (product) => `
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
</div>`
);

document.getElementById("img-2").innerHTML = telgopor.bandeja.map(
  (product) => `
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
</div>`
);
