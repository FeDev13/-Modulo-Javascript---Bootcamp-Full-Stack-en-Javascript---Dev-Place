const inputDNI = document.getElementById("input-dni");
const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputTel = document.getElementById("input-tel");
const buttonAgregar = document.getElementById("agregarContacto");
const buttonEliminar = document.getElementById("eliminarContacto");
const contactosLista = document.getElementById("contenedorContactos");
const contactosBusqueda = document.getElementById("contenedorBusqueda");
const form = document.getElementById("form");
const buttonOrdenar = document.getElementById("ordenarAgenda");

let agenda = [
  { dni: 35655823, nombre: "Pepe", apellido: "Luis", telefono: 44555444 },
  {
    dni: 33555887,
    nombre: "Luis Alonso",
    apellido: "Rueda",
    telefono: 44555878,
  },
  { dni: 31655823, nombre: "Alex", apellido: "Robles", telefono: 44555445 },
];
console.log(agenda);

//ordena contactos por dni
buttonOrdenar.onclick = () => {
  agenda.sort((a, b) => a.dni - b.dni);
  renderAgenda();
};

class Contacto {
  dni;
  nombre;
  apellido;
  telefono;

  constructor(dni, nombre, apellido, telefono) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}

let agregarContacto = (contacto) => {
  agenda.push(contacto);
};

let buscarPorContacto = (DNI) => {
  let index = null;
  agenda.forEach((contacto, i) => {
    if (contacto.dni == DNI) {
      index = i;
    }
  });
  return index;
};

//Se agrega el contacto
buttonAgregar.onclick = () => {
  if (
    inputDNI.value &&
    inputNombre.value &&
    inputApellido.value &&
    inputTel.value
  ) {
    //validacion
    if (buscarPorContacto(inputDNI.value) !== null) {
      Swal.fire({
        icon: "error",
        text: "el contacto ya existe",
      });
    } else {
      agregarContacto(
        new Contacto(
          inputDNI.value,
          inputNombre.value,
          inputApellido.value,
          inputTel.value
        )
      );
      Swal.fire("Contacto agendado");

      renderAgenda();
    }
  }
  console.log(agenda);
};

let eliminarPorDNI = (dni) => {
  let resultado = false;
  let cont = buscarPorContacto(dni);
  if (cont !== null) {
    agenda.splice(cont, 1);
    resultado = true;
  }
};

const renderAgenda = () => {
  contactosLista.innerText = "";
  if (agenda.length > 0) {
    agenda.forEach((contacto) => {
      //muestra los contactos ya agendados y los nuevos
      let { dni, nombre, apellido, telefono } = contacto;
      let nuevoDiv = document.createElement("div");
      nuevoDiv.classList.add("cart-item");
      nuevoDiv.innerHTML = `<div class="cart-item">
      
      <div class="details">
          <h5 class ="documento">${dni}</h5>
          <h5 class="nombre">${nombre}</h5>
          <h5 class = "apellido">${apellido}<h5>
          <button data-id = "${dni}" class="btn btn-danger" id = "botonQuitar">Eliminar</button>
      </div>
   </div>
      `;
      contactosLista.appendChild(nuevoDiv);
    });
  }
};
contactosLista.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    borrarContacto(Number(e.target.dataset.id));
  }
  Swal.fire({
    icon: "error",
    text: "Contacto eliminado",
  });
});

const borrarContacto = (dni) => {
  const contactoIndex = agenda.findIndex((cont) => cont.dni === Number(dni));
  agenda.splice(contactoIndex, 1);
  renderAgenda();
};

//resetea los inputs
buttonAgregar.addEventListener("click", () => {
  form.reset();
});

//buscar
document.getElementById("buscar").addEventListener("click", (e) => {
  e.preventDefault();
  let inputSearch = document.getElementById("search").value;
  var variableVacia = ""; //levarla global?
  agenda.forEach((contacto) => {
    let { dni, nombre, apellido, telefono } = contacto;
    if (inputSearch === contacto.apellido) {
      inputSearch = variableVacia;
      renderBusqueda(variableVacia);
    }
  });
});

const renderBusqueda = () => {
  contactosBusqueda.innerText = "";
  if (agenda.length > 0) {
    agenda.forEach((contacto) => {
      //muestra los contactos ya agendados y los nuevos
      let { dni, nombre, apellido, telefono } = contacto;
      let nuevoDivBusqueda = document.createElement("div");
      nuevoDivBusqueda.classList.add("panel1");
      nuevoDivBusqueda.innerHTML = `<div class="panel1">
      
      <div class="details">
          <h5 class ="documento">${dni}</h5>
          <h5 class="nombre">${nombre}</h5>
          <h5 class = "apellido">${apellido}<h5>
          <button data-id = "${dni}" class="btn btn-danger" id = "botonQuitar">Eliminar</button>
      </div>
   </div>
      `;
      contactosBusqueda.appendChild(nuevoDivBusqueda);
    });
  }
};
