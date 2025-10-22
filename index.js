//RESUELVE LOS EJERCICIOS AQUI

//1 - Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], 
// crea una función **elevados** que sea el resultado de elevar cada número a si mismo. 

// USO .map() para crear un nuevo array recorriendo cada nº del anterior y elevandolo al cuadrado con: Math.pow(base, exponente): calcula el resultado de la base elevado al exponente.
// num: nombre que doy a cada nº del array

numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados(numbers) {
  return numbers.map(num => Math.pow(num, num));
}
console.log(elevados(numbers));

// 2 - Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], 
// generar un segundo array que consiga generar de salida el resultado esperado.


// NO ESTÁ HECHO !!!!!

foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let frases = [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
] 

console.log(frases);




//3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo 
// accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];


/*   Resultado esperado
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/

const frases2 = staff.map(persona => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
});
console.log(frases2);

// 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares:

// impar es que al dividir entre 2 el resto NO es 0 
// .filter() metodo q recorre cada elto del array y crea nuevo array SOLO CON los elementos que cumplan una condicion
// num: nombre que doy a cada nº del array cuando se evaluan.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(num => num %2 !== 0);

console.log(result4);