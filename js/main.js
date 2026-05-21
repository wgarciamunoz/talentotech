/**
 * Demostración de estructuras de datos
 * Incluye ejemplos de: Arrays, Lista Enlazada, Pila (LIFO), Cola (FIFO)
 */

console.log('=== Ejemplo de Arrays ===');

const frutas = ['manzana', 'uva', 'bananos', 'pera'];
console.log('Frutas iniciales:', frutas);

frutas.push('sandia');
console.log('Después de push:', frutas);

frutas.pop();
console.log('Después de pop:', frutas);

frutas.shift();
console.log('Después de shift:', frutas);

frutas.unshift('kiwi');
console.log('Después de unshift:', frutas);

frutas.splice(0, 2);
console.log('Después de splice (eliminar):', frutas);

frutas.splice(1, 0, 'naranja', 'melon');
console.log('Después de splice (insertar):', frutas);

const frutas2 = frutas.splice(0, 2);
console.log('Frutas extraídas:', frutas2.toString());
console.log('Frutas restantes:', frutas.join(' - '));

const persona = { nombre: 'Juan', edad: 30, profesion: 'Desarrollador' };
console.log('Objeto Persona:', persona);

console.log('\n=== Ejemplo de Lista Enlazada ===');

const lista = new EstructurasDatos.ListaEnlazada();
lista.agregar(1);
lista.agregar(2);
lista.agregar(3);
lista.imprimir();
console.log('Lista completa:', lista.obtenerTodos());

console.log('\n=== Ejemplo de Pila (LIFO) ===');

const pila = new EstructurasDatos.Pila();
pila.push(1);
pila.push(2);
pila.push(3);

console.log('Elemento en cima (peek):', pila.peek());
console.log('Elemento eliminado (pop):', pila.pop());
console.log('Elemento en cima después del pop:', pila.peek());

console.log('\n=== Ejemplo de Cola (FIFO) ===');

const cola = new EstructurasDatos.Cola();
cola.enqueue(1);
cola.enqueue(2);
cola.enqueue(3);

console.log('Primer elemento (front):', cola.front());
console.log('Elemento eliminado (dequeue):', cola.dequeue());
console.log('Primer elemento después del dequeue:', cola.front());
