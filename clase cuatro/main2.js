const inputDNI = document.getElementById("input-dni");
const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputTel = document.getElementById("input-tel");
const buttonAgregar = document.getElementById("agregarContacto");
const buttonEliminar = document.getElementById("eliminarContacto");
const renderDom = document.getElementById("div-vacio");
const contactosLista = document.getElementById("contenedorContactos");

let agenda = [];

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
      /* limpiarInputs();
      refrescar(); */
      renderCards();
    }
  }
};

let eliminarPorDNI = (dni) => {
  let resultado = false;
  let cont = buscarPorContacto(dni);
  if (cont !== null) {
    agenda.splice(cont, 1);
    resultado = true;
  }
};

buttonEliminar.onclick = () => {
  eliminarPorDNI(inputDNI.value);
  Swal.fire({
    icon: "error",
    text: "contacto eliminado",
  });
  console.log(agenda);
  contactosLista.innerHTML = "";
};

const renderCards = () => {
  let contactosPanelVista = "";
  agenda.forEach((contacto) => {
    let { dni, nombre, apellido, telefono } = contacto;
    contactosPanelVista += `<div class="col-12 mb-2 col-md-4 col-sm-4 panel">
            <div class="card panel1" style="background-color:rgba(214, 169, 164, 0.1);">
            <div class="card-body">
            <h5 id="tituloProducto">${nombre}</h5>
            <h5 id="descripcionProducto">${apellido}</h5>
            <h5 id="precioProducto">${telefono}</h5>
            </div>
            </div>
            </div>
            `;
  });
  contactosLista.innerHTML = contactosPanelVista;
};
renderCards();
