/**
 * Módulo de estructuras de datos
 * Incluye: Lista Enlazada, Pila (LIFO), Cola (FIFO)
 */

// ==================== Lista Enlazada ====================

class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
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

  imprimir() {
    let nodoActual = this.primerNodo;
    while (nodoActual) {
      console.log(nodoActual.valor);
      nodoActual = nodoActual.siguiente;
    }
  }

  obtenerTodos() {
    const valores = [];
    let nodoActual = this.primerNodo;
    while (nodoActual) {
      valores.push(nodoActual.valor);
      nodoActual = nodoActual.siguiente;
    }
    return valores;
  }
}

// ==================== Pila (LIFO) ====================

class Pila {
  constructor() {
    this.items = [];
  }

  push(elemento) {
    this.items.push(elemento);
  }

  pop() {
    if (this.items.length === 0) {
      return 'La pila está vacía';
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  estaVacia() {
    return this.items.length === 0;
  }

  tamano() {
    return this.items.length;
  }
}

// ==================== Cola (FIFO) ====================

class Cola {
  constructor() {
    this.items = [];
  }

  enqueue(elemento) {
    this.items.push(elemento);
  }

  dequeue() {
    if (this.items.length === 0) {
      return 'La cola está vacía';
    }
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) {
      return 'La cola está vacía';
    }
    return this.items[0];
  }

  estaVacia() {
    return this.items.length === 0;
  }

  tamano() {
    return this.items.length;
  }
}

// Exportar estructuras
const EstructurasDatos = {
  Nodo,
  ListaEnlazada,
  Pila,
  Cola
};
