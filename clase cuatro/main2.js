const inputDNI = document.getElementById("input-dni");
const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputTel = document.getElementById("input-tel");
const buttonAgregar = document.getElementById("agregarContacto");
const buttonEliminar = document.getElementById("eliminarContacto");
const buttonMostrar = document.getElementById("mostrarAgenda");
const tableAgenda = document.getElementById("agendaContent");
const encabezadoDNI = document.getElementById("encabezadoDNI");
const encabezadoNombre = document.getElementById("encabezadoNombre");
const encabezadoApellido = document.getElementById("encabezadoApellido");
const encabezadoTelefono = document.getElementById("encabezadoTelefono");

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

  toString() {
    return `DNI: ${this.dni} \nNombre: ${this.nombre} \nApellido: ${this.apellido} \nTeléfono: ${this.telefono}`;
  }

  toTableRow() {
    return `<tr>
    <td>${this.dni}</td>
    <td>${this.nombre}</td>
    <td>${this.apellido}</td>
    <td>${this.telefono}</td>
    </tr>`;
  }
}

let agregarContacto = (contacto) => {
  agenda.push(contacto);
};

let buscarPorContacto = (DNI) => {
  let int = null;
  agenda.forEach((contacto, i) => {
    if (contacto.dni == DNI) {
      int = i;
    }
  });
  return int;
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
      limpiarInputs();
      refrescar();
    }
  }
};

let eliminarPorDNI = (dni) => {
  let resultado = false;
  let pos = buscarPorContacto(dni);
  if (pos !== null) {
    agenda.splice(pos, 1);
    resultado = true;
  }
  return resultado;
};

buttonEliminar.onclick = () => {
  eliminarPorDNI(inputDNI.value);
  Swal.fire({
    icon: "error",
    text: "contacto eliminado",
  });
};

buttonMostrar.onclick = () => {
  refrescar();
};

function refrescar() {
  limpiarTabla();
  let ind = 0;

  agenda.map((contacto) => {
    const rowNode = document.createElement("tr");

    let cellNode = document.createElement("td");
    let textNode = document.createTextNode(contacto.dni);
    cellNode.appendChild(textNode);
    rowNode.appendChild(cellNode);

    cellNode = document.createElement("td");
    textNode = document.createTextNode(contacto.nombre);
    cellNode.appendChild(textNode);
    rowNode.appendChild(cellNode);

    cellNode = document.createElement("td");
    textNode = document.createTextNode(contacto.apellido);
    cellNode.appendChild(textNode);
    rowNode.appendChild(cellNode);

    cellNode = document.createElement("td");
    //textNode = document.createTextNode(contacto.telefono);
    //cellNode.appendChild(textNode);
    cellNode.innerHTML = contacto.telefono; //FORMA DE AGREGARLE EL TEXTO INTERNO SIN CREAR TEXTNODE
    rowNode.appendChild(cellNode);

    //Botón editar
    cellNode = document.createElement("td");
    let buttonNode = document.createElement("button");
    buttonNode.innerHTML = "editar";
    //mmm....
    buttonNode.setAttribute("pos", `${ind}`);
    buttonNode.setAttribute("onclick", `alert(${ind});`);
    ind++;
    rowNode.appendChild(buttonNode);

    tableAgenda.appendChild(rowNode);
  });
}

function limpiarTabla() {
  while (tableAgenda.firstChild) {
    tableAgenda.removeChild(tableAgenda.lastChild);
  }
}

function limpiarInputs() {
  inputDNI.value = "";
  inputNombre.value = "";
  inputApellido.value = "";
  inputTel.value = "";
}
