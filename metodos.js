//1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada. 
//(Con lista desordenada se refiere al elemento HTML, pero deben mostrarlos ORDENADOS en un 
//elemento UL en el HTML, como el ejercicio final del TP5)

document.addEventListener("DOMContentLoaded", function() {
  
  let num_aleatorios = [];
  
  for (let i = 0; i < 10; i++) {
    num_aleatorios.push(Math.floor(Math.random() * 100) + 1);
  }
  
  num_aleatorios.sort(function(a, b) {
    return a - b;
  });

  let lista = document.getElementById("numeros");
  for (let i = 0; i < num_aleatorios.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(num_aleatorios[i]));
    lista.appendChild(item);
  }
});


//2. Dado el array = [1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en 
//pantalla.
// b. Iterar por todos los elementos dentro de un array utilizando For y mostrarlos en 
//pantalla
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en 
// pantalla.
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// f. Calcular el promedio

let array=[1,2,3,4,5,6];
let e =0;
let array_nuevo=[];

//A
while(i<array.length){
  console.log(array[i]);
  e++
}

//B
for (let f = 0; f < array.length; f++) {
  console.log(array[f]);
  e++
  }

//C
array.forEach(function (element){
  console.log(element);
  });

//D
for (let j = 0; j < array.length; j++) {
  array[j] = array[j] + 1;
  console.log(array[j]);
}

//E
for (let i = 0; i < array.length; i++) {
  array_nuevo.push(array[i] + 1);
}
console.log(array_nuevo);

//D
let sum=0;
for(let i = 0; i < array.length; i++) {
  sum += array[i];
}
let promedio = sum / array.length;
console.log(promedio);

// 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es elevado al cuadrado.

let array_potencia=[1,2,3,4,5,6]
let resultado=[];
for(let i=0;i<array.length;i++){
resultado.push(array_potencia[i]**2);
}
console.log(resultado);


// 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

let array_suma = [1, -4, 12, 0, -3, 29, -150];
let resultado_sum = 0;
for (let i = 0; i < array_suma.length; i++) {
  if (array_suma[i] > 0) {
    resultado_sum += array_suma[i];
  }
}
console.log(resultado_sum)

// 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
// a. Obtener aquellos nombres con al menos 6 letras.
// b. Obtener los nombres que comienzan con "M".
// c. Ordenar alfabéticamente y mostrar por consola.
// d. Generar un array que contenga solo las iniciales
// e. Ejemplo: ["F", "L", "E", "M",... ].
// f. Generar un array que contenga todos los nombres en mayúscula.
// g. Queremos saber si alguno de estos nombres comienza con "J”

let array_nombres=["Florencia","Lucas","Ezequiel","Matias","Bruno","Gustavo","Martin"];

//A
let nom_6_letras=[];
for(let i=0;i<array_nombres.length;i++){
  if (array_nombres[i].length>=6) {
    nom_6_letras.push(array_nombres[i]);
  }
}
console.log(nom_6_letras);

//B
let nom_m=[];
for(let i=0;i<array_nombres.length;i++){
  if(array_nombres[i][0]==="M"){
    nom_m.push(array_nombres[i]);
  }
}
console.log(nom_m);
//C
array_nombres.sort();
console.log(array_nombres);

//D
let iniciales = [];
for(let i = 0; i < array_nombres.length; i++) {
  let inicial = array_nombres[i][0];
  iniciales.push(inicial);
}
console.log(iniciales);

//F
let mayusculas = [];
for (let i = 0; i < array_nombres.length; i++) {
  mayusculas.push(array_nombres[i].toUpperCase());
}
console.log(mayusculas);

//G

let nom_conJ = false;
for (let i = 0; i <array_nombres.length; i++) {
  if (array_nombres[i][0] === "J") {
    nom_conJ = true;
    break;
  }
}
if (nom_conJ) {
  console.log("Hay al menos un nombre que comienza con J.");
} else {
  console.log("Ningún nombre comienza con J.");
}
// 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un 
// color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

let array_colores=["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let ingreso=prompt ("Ingrese un color");
let encontrado=false;
for (let i = 0; i < array_colores.length; i++) {
  if (array_colores[i] === ingreso) {
    encontrado = true;
    break;
  }
}
if (encontrado) {
  console.log("El color introducido se encuentra en el ARRAY");
} else {
  console.log("El color introducido no se encuentra en el ARRAY");
}


// 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los 
// números pares (Recuerda que ((numero % 2) == 0) determina si un numero es par o no, si tiene 
// el resultado ==0 es par, sino es impar)


function obtenerNumerosPares(array) {
  let arrayPares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrayPares.push(array[i]);
    }
  }
  return arrayPares;
}

const arrayInicial = [1, 2, 3, 4, 5, 6];
const nPares = obtenerNumerosPares(arrayInicial);
console.log(nPares); // [2, 4, 6]


//Ejercicio 8
function pasarPalabrasConInicialVocalAOtro(arreglo) {
    const vocales = ['a','e','i','o','u'];
    const palabrasConVocal = [];

    for (let i = 0; i < arreglo.length; i++) {
      const letraInicial = arreglo[i][0].toLowerCase();
      if (vocales.includes(letraInicial)) {
        palabrasConVocal.push(arreglo[i]);
      }
    }
    return palabrasConVocal;
}
/*----------------------------------------------------------------------*/
//Ejercicio 9
function intercambiarElementosSegunIndice(arr, indice1, indice2) {
    const aux = arr[indice1];
    arr[indice1] = arr[indice2];
    arr[indice2] = aux;
    return arr;
  }
/*----------------------------------------------------------------------*/
//Ejercicio 10
const filas = document.querySelectorAll('.fila');
filas.forEach(fila => {
  fila.addEventListener('click', function() {
    this.classList.toggle('fila-seleccionada');
  });
});      
/*----------------------------------------------------------------------*/
//Ejercicio 11
const elementos = document.querySelectorAll('li');

elementos.forEach(elemento => {
  elemento.addEventListener('click', function() {
    this.style.display = 'none';
  });
});
/*----------------------------------------------------------------------*/
//Ejercicio 12
var filas1 = document.querySelectorAll('#tabla1 tr');
  for (var i = 0; i < filas1.length; i++) {
    filas1[i].addEventListener('click', function() {
      this.style.backgroundColor = 'blue';
    });
  }
/*----------------------------------------------------------------------*/
//Ejercicio 13
const btnChico = document.querySelector('#btn-chico');
const btnGrande = document.querySelector('#btn-grande');
const descripcionesNoticias = document.querySelectorAll('.descripcion-noticia');

btnChico.addEventListener('click', () => {
  descripcionesNoticias.forEach(descripcion => {
    descripcion.classList.remove('noticia-grande');
    descripcion.classList.add('noticia');
  });
});

btnGrande.addEventListener('click', () => {
  descripcionesNoticias.forEach(descripcion => {
    descripcion.classList.remove('noticia');
    descripcion.classList.add('noticia-grande');
  });
});
/*----------------------------------------------------------------------*/
//Ejercicio 14
const btnCambiar = document.querySelector('#btn-cambiar');
const tabla1 = document.querySelector('#tabla3');
const celdasTabla1 = tabla1.querySelectorAll('td');

btnCambiar.addEventListener('click', () => {
  celdasTabla1.forEach(celda => {
    celda.textContent = '-';
  });
});
/*----------------------------------------------------------------------*/
//Ejercicio 15
const Hipervinculo = document.getElementById("Hipervinculo");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

boton1.addEventListener("click", () => {
  Hipervinculo.href = boton1.dataset.href;
  Hipervinculo.textContent = "Texto del hipervínculo 1";
});

boton2.addEventListener("click", () => {
  Hipervinculo.href = boton2.dataset.href;
  Hipervinculo.textContent = "Texto del hipervínculo 2";
});

boton3.addEventListener("click", () => {
  Hipervinculo.href = boton3.dataset.href;
  Hipervinculo.textContent = "Texto del hipervínculo 3";
});
/*-----------------------------------------------------------------------*/
//Ejercicio 16
const palabras = document.querySelectorAll('strong');
palabras.forEach(palabra => {
  palabra.addEventListener('click', () => {
    palabra.style.display = 'none';
  });
});

/*-----------------------------------------------------------------------*/
//Ejercicio 17

var table1 = document.getElementById("Tabla-Ej17");
var cells1 = table1.querySelectorAll("td");

for (var i = 0; i < cells1.length; i++) {
  cells1[i].addEventListener("mouseenter", function() {
    this.classList.add("highlight");
    this.classList.remove("stay-highlighted");
  });
  cells1[i].addEventListener("mouseleave", function() {
    this.classList.add("stay-highlighted");
    this.classList.remove("highlight");
  });
}

/*-----------------------------------------------------------------------*/
//Ejercicio 18

var table = document.getElementById("Tabla-Ej18");
var cells = table.querySelectorAll("td");

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseenter", function() {
    this.classList.add("highlight");
  });
  cells[i].addEventListener("mouseleave", function() {
    this.classList.remove("highlight");
  });
}


/*--------------------------------------------------------------------------*/
//Ejercicio 19
var myDiv = document.getElementById("myDiv");

myDiv.addEventListener("dblclick", function() {
  if (myDiv.style.width == "800px") {
    myDiv.style.width = "250px";
    myDiv.style.height = "250px";
  } else {
    myDiv.style.width = "800px";
    myDiv.style.height = "70px";
  }
});

/*--------------------------------------------------------------------------*/
//Ejercicio 20

const miEnlace = document.getElementById('miEnlace');
  
  miEnlace.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(miEnlace.href);
  });


/*------------------------------------------------------------------------------*/
//Ejercicio 21

const miFormulario = document.getElementById('Formulario');
const mensaje = document.getElementById('mensaje');

  miFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    mensaje.textContent = 'El formulario ya fue enviado';
    console.log('El formulario ya fue enviado');
  });
