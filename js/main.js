class Persona {
  // // propiedades de la clase Persona
  // _nombre;
  // _edad;
  // _hijos;

  // Constructor de la clase Persona
  constructor(nombre, edad, peso, altura) {
    this._nombre = nombre;
    this._edad = edad;
    this._hijos = []; // Agregar la variable de instancia hijos
    this._peso = peso;
    this._altura = altura;
  }

  // Métodos de acceso para el nombre, la edad y los hijos
  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  get hijos() {
    return this._hijos;
  }

  set hijos(hijos) {
    this._hijos = hijos;
  }

  get peso() {
    return this._peso;
  }

  set peso(peso) {
    this._peso = peso;
  }

  get altura() {
    return this._altura;
  }
 
  // Método para saludar
  saludar() {
    console.log(`Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años y mis hijos son ${this._hijos}`);
  }

  // obtener IMC
  calcularIMC() {
    return this._peso / (this._altura * this._altura);
  }


}


class Jefe extends Persona {
  constructor(nombre, edad, departamento) {
    super(nombre, edad);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años y soy jefe del departamento de ${this._departamento}`);
  }
}

Geova = new Persona('Geova', 25, 1.73, 70);
Geova.saludar();
console.log(Geova.calcularIMC());

Geova._hijos.push('Juan', 'Pedro', 'María');


Jefe = new Jefe('Geova', 25, 'Desarrollo');
Jefe.saludar(); // Hola, mi nombre es Geova, tengo 25 años y soy jefe del departamento de Desarrollo
