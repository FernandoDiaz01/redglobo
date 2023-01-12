
/* cards de main */
import data from "./data.json" assert{type:"json"};

  document.getElementById("img-1").innerHTML = data.map(product => `
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




