/* Se pretende realizar una aplicación para esta academia que gestione la información sobre las personas vinculadas con la misma, que se pueden clasificar en tres tipos: 
estudiantes, profesores y personal de servicio. A continuación, se detalla qué tipo de información debe gestionar esta aplicación:
• Por cada persona, se debe conocer, al menos, su nombre y apellidos, su número de identificación y su estado civil.
• Con respecto a los empleados, sean del tipo que sean, hay que saber su año de incorporación a la facultad y qué número de despacho tienen asignado.
• En cuanto a los estudiantes, se requiere almacenar el curso en el que están matriculados.
• Por lo que se refiere a los profesores, es necesario gestionar a qué departamento pertenecen (base de datos, java, php, ...).
• Sobre el personal de servicio, hay que conocer a qué sección están asignados (biblioteca, decanato, secretaría, ...).
El ejercicio consiste, en primer lugar, en definir la jerarquía de clases de esta aplicación. A continuación, debe programar las clases definidas en las que, 
además de los constructores, hay que desarrollar los métodos correspondientes a las siguientes acciones:
• Cambio del estado civil de una persona.
• Reasignación de despacho a un empleado.
• Matriculación de un estudiante en un nuevo curso.
• Cambio de departamento de un profesor.
• Traslado de sección de un empleado del personal de servicio.
• Imprimir toda la información de cada tipo de individuo.

Aplique los Principios SOLID para generar las clases correspondientes */

class Persona {
  //clase

  constructor(nombre, apellido, id, estado_civil) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
    this.estado_civil = estado_civil;
  }

  cambioDeEstado() {
    this.estado_civil = otro;
  }
}
//subclases
class Estudiante extends Persona {
  constructor(nombre, apellido, id, estado_civil, curso) {
    super(nombre, apellido, id, estado_civil);
    this.curso = curso;
  }
  cambioDeEstado() {
    this.estado_civil = otro;
  }
  cambioDeCurso(nuevoCurso) {
    this.curso = nuevoCurso;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, id, estado_civil, ingreso, despacho) {
    super(nombre, apellido, id, estado_civil);
    this.ingreso = ingreso;
    this.despacho = despacho;
  }
}

class Profesor extends Empleado {
  constructor(nombre, apellido, id, estado_civil, ingreso, departamento) {
    super(nombre, apellido, id, estado_civil, ingreso, despacho);
    this.departamento = departamento;
  }
  cambioDeEstado() {
    this.estado_civil = otro;
  }
  cambioDepto(nuevoDepto) {
    this.departamento = nuevoDepto;
  }
}

class Personal extends Empleado {
  constructor(nombre, apellido, id, estado_civil, ingreso, seccion) {
    super(nombre, apellido, id, estado_civil, ingreso);
    this.seccion = seccion;
  }
  cambioDeEstado() {
    this.estado_civil = otro;
  }
  cambioSeccion(nuevaSeccion) {
    this.seccion = nuevaSeccion;
  }
}
