const modalPost = new bootstrap.Modal(document.getElementById("modalPost"));

const cargarPost = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    if (res.ok) {
      const datos = await res.json();
      const post = document.getElementById("post");
      datos.forEach((element) => {
        let texto = element.title;
        let cuerpo = element.body;
        texto = texto.toUpperCase();
        let columna = document.createElement("div");
        columna.classList.add("col-3", "p-3");
        let card = document.createElement("div");
        card.classList.add("card", "p-1");
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let p = document.createElement("h5");
        p.classList.add("card-title");
        p.innerHTML = texto;
        let cuerpodiv = document.createElement("div");
        cuerpodiv.innerHTML = cuerpo;
        cardBody.appendChild(p);
        cardBody.appendChild(cuerpodiv);
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("btnPost", "btn", "btn-primary");
        button.databstoggle = "modal";
        button.databstarget = "#modalPost";

        button.innerText = "COMENTARIOS";
        card.appendChild(cardBody);
        card.appendChild(button);
        columna.appendChild(card);
        //columna.innerHTML = p + cuerpodiv;
        post.appendChild(columna);
      });

      console.log(datos);
    } else {
      console.log(res.status);
    }
  } catch (err) {
    console.log(err);
  }
};

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};
on(document, "click", ".btnPost", (e) => {
  modalPost.show();
});
cargarPost();

/*   Supongamos que un banco ofrece distintos productos a sus clientes (CuentaCorriente, CajaAhorro, SeguroDeVida, SeguroHogar). 
 Realizar el método Object. assign(), utilizando el patrón de diseño Prototype, para realizar la copia de cualquiera de estos productos.

 1 clonaciones metodos para cada cuenta y van dentro del metodo asign
 clase personha tiene producto, cuentas son extedns de banco
 2 singleton
 3 builder
 */
