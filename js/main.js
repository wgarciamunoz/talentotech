  const frutas = new Array('manzana', 'uva', 'bananos', 'pera');

//const frutas = ['manzana', 'uva', 'bananos', 'pera'];
console.log(frutas);

frutas.push('sandia');
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.shift();
console.log(frutas);

frutas.unshift('kiwi');
console.log(frutas);

frutas.splice(0, 2);
console.log(frutas);

frutas.splice(1, 0, 'naranja', 'melon');
console.log(frutas);

const frutas2 = frutas.splice(0, 2);
console.log(frutas2.toString());
const toString = frutas2.toString();
console.log(toString);
console.log(toString.split(',')) ;
// join
console.log(frutas2.join(' - '));


const Persona = {nombre: 'Juan', edad: 30, profesion: 'Desarrollador'};
console.log(Persona);

// Listas enlazadas
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null; // Inicialmente, el siguiente nodo es nulo
  }
}

class ListaEnlazada {
  constructor() {
    this.primerNodo = null;
  }

  agregar(valor) {
    const nuevoNodo = new Nodo(valor);

    if (!this.primerNodo) {
      this.primerNodo = nuevoNodo;
    } else {
      let nodoActual = this.primerNodo;
      while (nodoActual.siguiente) {
        nodoActual = nodoActual.siguiente;
      }
      nodoActual.siguiente = nuevoNodo;
    }
  }

  // Método para imprimir los valores de todos los nodos en la lista
  imprimir() {
    let nodoActual = this.primerNodo;
    while (nodoActual) {
      console.log(nodoActual.valor);
      nodoActual = nodoActual.siguiente;
    }
  }
}

// Creamos una instancia de la clase ListaEnlazada
const lista = new ListaEnlazada();

// Agregamos nodos a la lista
lista.agregar(1);
lista.agregar(2);
lista.agregar(3);

// Imprimimos los valores de todos los nodos en la lista
lista.imprimir();
console.log(lista);
console.log('---------------------');


// Pilas LIFO

class Pila {
  constructor() {
    this.items = [];
  }

  push(elemento) {
    this.items.push(elemento);
  }

  pop() {
    if (this.items.length === 0) {
      return "La pila está vacía";
    }
    return this.items.pop();
  }

  // Método para obtener el último elemento añadido a la pila sin eliminarlo
  peek() {
    return this.items[this.items.length - 1];
  }
}

// Creamos una instancia de la clase Pila
const pila = new Pila();

// Agregamos elementos a la pila
pila.push(1);
pila.push(2);
pila.push(3);

// Obtenemos el último elemento añadido a la pila sin eliminarlo
console.log(pila.peek()); // Salida: 3

// Eliminamos y devolvemos el último elemento añadido a la pila
console.log(pila.pop()); // Salida: 3

// Obtenemos el último elemento añadido a la pila sin eliminarlo
console.log(pila.peek()); // Salida: 2

console.log('---------------------');

// Colas FIFO
class Cola {
  constructor() {
    this.items = [];
  }

  enqueue(elemento) {
    this.items.push(elemento);
  }

  dequeue() {
    if (this.items.length === 0) {
      return "La cola está vacía";
    }
    return this.items.shift();
  }

  // Método para obtener el primer elemento añadido a la cola sin eliminarlo
  front() {
    if (this.items.length === 0) {
      return "La cola está vacía";
    }
    return this.items[0];
  }
}
// Creamos una instancia de la clase Cola
const cola = new Cola();

// Agregamos elementos a la cola
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);

// Obtenemos el primer elemento añadido a la cola sin eliminarlo
console.log(cola.front()); // Salida: 1

// Eliminamos y devolvemos el primer elemento añadido a la cola
console.log(cola.dequeue()); // Salida: 1

// Obtenemos el primer elemento añadido a la cola sin eliminarlo
console.log(cola.front()); // Salida: 2
