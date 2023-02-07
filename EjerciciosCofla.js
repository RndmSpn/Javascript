// CURSO JAVASCRIPT (DE SOY DALTO) ***** DE 0 A JUNIOR 
// Ejercicios Cofla 1  
 /* 
A)Pedir que ingresen el monto que tienen y mostrarles el helado mas caro que peudan comprar.
  Roberto tiene 1,5$, Pedro 1.7, Cofla 3 */
/*
  dineroRoberto = prompt("cuanto dinero tienes Roberto?");
  dineroPedro = prompt("cuanto dinero tienesPedro?");
  dineroCofla = prompt("cuanto dinero tienesCofla?");
  dineroRoberto = parseInt(dineroRoberto);
  dineroPedro = parseInt(dineroPedro);
  dineroCofla = parseInt(dineroCofla);
  
  if (dineroCofla >= 0.6 && dineroCofla < 1){
      alert("Cofla, te puedes comprar el helado de agua");
      alert("Y te sobran" + (dineroCofla - 0.6));
  }else if (dineroCofla >= 1 && dineroCofla < 1.6){
      alert("Cofla, te puedes comprar el helado de crema");
      alert("Y te sobran" + (dineroCofla - 1));
  }else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
      alert("Cofla, te puedes comprar el helado de menta");
      alert("Y te sobran" + (dineroCofla - 1.6));
  }else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
      alert("Cofla, te puedes comprar el helado de avellana");
      alert("Y te sobran" + (dineroCofla - 1.7));
  }else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
      alert("Cofla, te puedes comprar el helado de chocolate");
      alert("Y te sobran" + (dineroCofla - 1.8));
  }else if (dineroCofla >= 2.9){
      alert("Cofla, te puedes comprar el helado de confites o el pote de 1/4 de Kg");
      alert("Y te sobran" + (dineroCofla - 2.9));
  }else{
      alert("Lo siento, no te llega  para ningun helado");
  }
  
  
  if (dineroRoberto >= 0.6 && dineroRoberto < 1){
      alert("Roberto, te puedes comprar el helado de agua");
      alert("Y te sobran" + (dineroRoberto - 0.6));
  }else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
      alert("Roberto, te puedes comprar el helado de crema");
      alert("Y te sobran" + (dineroRoberto - 1));
  }else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
      alert("Roberto, te puedes comprar el helado de menta");
      alert("Y te sobran" + (dineroRoberto - 1.6));
  }else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
      alert("Roberto, te puedes comprar el helado de avellana");
      alert("Y te sobran" + (dineroRoberto - 1.7));
  }else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
      alert("Roberto, te puedes comprar el helado de chocolate");
      alert("Y te sobran" + (dineroRoberto - 1.8))
  }else if (dineroRoberto >= 2.9){
      alert("Roberto, te puedes comprar el helado de confites o el pote de 1/4 de Kg");
      alert("Y te sobran" + (dineroRoberto - 2.9));
  }else{
      alert("Lo siento, no te llega  para ningun helado");
  }
  
  
  if (dineroPedro >= 0.6 && dineroPedro < 1){
      alert("Pedro, te puedes comprar el helado de agua");
      alert("Y te sobran" + (dineroPedro - 0.6));
  }else if (dineroPedro >= 1 && dineroPedro < 1.6){
      alert("Pedro, te puedes comprar el helado de crema");
      alert("Y te sobran" + (dineroPedro - 1));
  }else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
      alert("Pedro, te puedes comprar el helado de menta");
      alert("Y te sobran" + (dineroPedro - 1.6));
  }else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
      alert("Pedro, te puedes comprar el helado de avellana");
      alert("Y te sobran" + (dineroPedro - 1.7));
  }else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
      alert("Pedro, te puedes comprar el helado de chocolate");
      alert("Y te sobran" + (dineroPedro - 1.8))
  }else if (dineroPedro >= 2.9){
      alert("Pedro,te puedes comprar el helado de confites o el pote de 1/4 de Kg");
      alert("Y te sobran" + (dineroPedro - 2.9));
  }else{
      alert("Lo siento, no te llega  para ningun helado");
  }
  
  /*Manera optima de resolver el ejercicio 1*//*
  "use strict";
  const definirCompra = (n)=>{
      let din = prompt(`Dinero de ${n}`);
      if (din >=0.6 && din <1) return (`${n}: helado de agua.`);
      if (din >=1 && din <1.6) return (`${n}: helado de crema.`);
      if (din >=1.6 && din <1.7) return (`${n}: helado de menta.`);
      if (din >=1.7 && din <1.8) return (`${n}: helado de avellana.`);
      if (din >=1.8 && din <2.9) return (`${n}: helado de chocolate.`);
      if (din >=2.9) return (`${n}: helado de confites o pote de 1/4 KG.`);
      else return (`${n}: Lo siento, no te llega para ningun helado.`)
  }
  console.log(definirCompra("Roberto"));
  console.log(definirCompra("Pedro"));
  console.log(definirCompra("Cofla"));
  
  /* Ejercicio Cofla 2 */
  /* 1.Mini-sistema que filtre a los mayores de edad */
  /*
  let free = false;
  
  const validarCliente = (time) => {
      let edad = prompt("¿Cual es tu edad?");
      if (edad >= 18){
          if (time >= 2 && time < 7 && free == false) {
              alert("Puedes pasar gratis, por que eres la prmera persona despues de las 2");
              free = true;
          }else{
              alert(`Son las ${time} , puedes pasar pero tienes que pagar la entradad `);
          }
      }else{
          alert("No puedes pasar porque eres menor de edad");
      }
  }
  
  validarCliente("23");
  
  
  /* 2. Asistencia alumnos */
  /*
  let cantidad = prompt("¿Cuantos alumnos son?");
  let alumnosTotales = [];
  
  for (i=0; i < cantidad; i++){
      alumnosTotales[i] = [prompt("Nombre del alumno" (i+ 1),0)];
  }
  const tomarAsistencia = (nombre,p)=>{
      let presencia = prompt(nombre);
      if (presencia == "p" || presencia == "P") {
          alumnosTotales[i][1]++;
      }
  }
  
  for (i = 0; i <30; i++) {
      for (alumno in alumnosTotales) {
          tomarAsistencia(alumnosTotales[alumno][0],alumno);
      }
  }
  
  for (alumno in alumnosTotales) {
      let resultado = `${alumnosTotales[alumno][0]}:<br>
      ___Presentes: ${alumnosTotales[alumno][1]}:<br>
      ___Ausencias: ${30 - alumnosTotales[alumno][1]}:<br> `;
  
      if (30 - alumnosTotales[alumno][1] > 18) {
          resultado+= "Suspendido por inasistencias";
      }else{
          resultado+= "<br><br>";
      }
  }
  /* 3) CALCULADORA SIMPLE */
  /*
  
      const sumar = (num1,num2)=>{
          return parseInt(num1) + parseInt(num2);
      }
      const restar = (num1,num2)=>{
          return parseInt(num1) - parseInt(num2);
      }
      const dividir = (num1,num2)=>{
          return parseInt(num1) / parseInt(num2);
      }
      const multiplicar = (num1,num2)=>{
          return parseInt(num1) * parseInt(num2);
      }
      alert("¿Que operacion deseas realizar?");
      operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion");
  
      if (operacion == 1) {
          let numero1 = prompt("Primer numero para sumar");
          let numero2 = prompt("Segundo numero para sumar");
          resultado = sumar(numero1,numero2);
          alert(`Tu resultado es: ${resultado}`);
      }
      else if (operacion == 2) {
          let numero1 = prompt("Primer numero para restar");
          let numero2 = prompt("Segundo numero para restar");
          resultado = restar(numero1,numero2);
          alert(`Tu resultado es: ${resultado}`);
      }
      else if (operacion == 3) {
          let numero1 = prompt("Primer numero para dividir");
          let numero2 = prompt("Segundo numero para dividir");
          resultado = dividir(numero1,numero2);
          alert(`Tu resultado es: ${resultado}`);
      }
      else if (operacion == 4) {
          let numero1 = prompt("Primer numero para multiplicar");
          let numero2 = prompt("Segundo numero para multiplicar");
          resultado = multiplicar(numero1,numero2);
          alert(`Tu resultado es: ${resultado}`);
      }
      else{
          alert("No se ha encontrado la operacion");
      }


///////////////////////////////////////  Ejercicio Cofla 3

class Celular{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    botonEncender(){
        if(this.encendido == false){
            alert("Celular encendido");
            this.encendido = true;
        }else{
                alert("Celular ya esta encendido");
                this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando");
        }else{
                alert("El celular esta apagado");
            }
    }
    foto(){
        alert(`Foto tomada con exito! A una resolucion de : ${this.resolucionDeCamara}`);
    }
    video(){
        alert(`Grabando a una resolucion de : ${this.resolucionDeCamara}`);
    }
    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño : <b>${this.tamaño}</b><br>
        Resolucion de Cámara: <b>${this.rdc}</b><br>
        Resolucion de pantalla: <b>${this.rdp}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `
    }


}


class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdp,rdc,ram,rdce) {
        super(color,peso,tamaño,rdc,rdp,ram);
        this.resolucionDeCamaraExtra = rdce;

    }
    grabarCamaraLenta(){
        alert("Grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Reconociendo cara");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion de Camara Extra : ${this.resolucionDeCamaraExtra}`
}
}

celular1 = new Celular("azul","150","5","full hd","2 GB");
celular2 = new Celular("gris","155","5,5","full hd","8 GB");
celular3 = new Celular("negro","148","6","full hd","4 GB");

celular1.botonEncender();
celular1.foto();
celular1.video();
celular1.reiniciar();
celular1.botonEncender();

document.write(`
   ${celular1.mostrarInfo()}</br>
   ${celular2.mostrarInfo()}</br>
   ${celular3.mostrarInfo()}</br>
   `)


celularAltaGama1 = CelularAltaGama("plata","156","7","4K","12GB");
celularAltaGama2 = CelularAltaGama("oro","149","6,5","4K","16 GB");

document.write(`
   ${celularAltaGama1.infoAltaGama()}</br>
   ${celularAltaGama2.infoAltaGama()}</br>
   `)

 class App{
      constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalda = false;
      }
      abrir(){
        if (this.iniciada == false && this.instalda == true){
            this.iniciada = true;
            alert("App encendida");
        }
      }
      cerrar(){
        if (this.iniciada == true && this.instalda == true){
            this.iniciada = false;
            alert("App cerrada");
        }
       }
       instalar(){
        if (this.instalada == false) {
            this.instalda = true;
            alert("App instalada correctamente");
        }
       }
       desinstalar(){
            if (this.instalada == true) {
                this.instalda = false;
                alert("App desinstalada correctamente");
            }
        }
        appInfo(){
            return `
            Descargas: <b>${this.descargas}</b></br>
            Puntuacion: <b>${this.puntuacion}</b></br>
            Peso: <b>${this.peso}</b></br>
            
            `
        }
    }

app = new App("165.000","5 estellas","600mb");

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();

////////////////////////
*/
/* EJERCICIOS COFLA 4 */
/* CALCULADORA MEJORADA */

/*class Calculadora {
sumar (num1,num2) {
    return parseInt(num1) + parseInt(num2);
}
restar (num1,num2) {
    return parseInt(num1) - parseInt(num2);
}
dividir (num1,num2) {
    return parseInt(num1) / parseInt(num2);
}
multiplicar (num1,num2) {
    return parseInt(num1) * parseInt(num2);
}
potenciar(num,exp){/*
    let numero = num;
    for (var i = 1; i < exp; i++){
        numero = numero * num
    }
    return numero;*//*
    return num**exp;
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);

}
}
const calculadora = new Calculadora();
alert("¿Que operacion deseas realizar?");
operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion , 5: potenciacion , 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("Número a potenciar");
    let numero2 = prompt("Exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Raiz cuadrada de: ");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es: ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Raiz cubica de: ");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es: ${resultado}`);
}
else{
    alert("No se ha encontrado la operacion");
}

*/
//////////////////////////////////////////////
/*2.  */
/*
const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","pedro","juan","cofla","maria"],
        programacion: ["Rodriguez","pedro","juan","cofla","maria"],
        logica: ["Fernandez","pedro","juan","cofla","maria"],
        quimica: ["Hernandez","pedro","juan","cofla","maria"]
    }
    if (materias[materia] != undefined) {
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    
let informacion = obtenerInformacion(materia);
if ( informacion !== false){
    let profesor= informacion(materia)[0][0];
    let alumnos = informacion(materia)[0]
    alumnos.shift();
    document.write(`El profesor de  ${informacion[1]} es: ${profesor} <br>
                    Los alumnos son: ${alumnos}`);
}
}

const cantidadClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
            return `${alumno} esta em ${cantidadTotal} clases <br>
                     Esta cursando: ${clasesPresentes}<br><br>`;
        }
    }

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

cantidadClases("cofla");
*/

////////////
/* 3
*/ /*
const materias = {
    fisica: ["Perez","pedro","juan","cofla","maria"],
    programacion: ["Rodriguez","pedro","juan","cofla","maria"],
    logica: ["Fernandez","pedro","juan","cofla","maria"],
    quimica: ["Hernandez","pedro","juan","cofla","maria"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    personas.shift();
    if (alumno.length >= 20) {
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya esta llena`);
    }else{
        alumnos.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: alumnos,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
           
        } else if (materia == "programacion") {
                materias = {
                    fisica: materias['fisica'],
                    programacion: alumnos,
                    logica: materias['logica'],
                    quimica: materias['quimica']
                }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: alumnos,
                quimica: materias['quimica']
            }
        } 
        else if (materia == "quimica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica:  materias['logica'],
                quimica: alumnos
            }
        }
        document.write(`Felicidades ${alumnmo}, te has inscrito correctamente a ${materia}`);

    }
}

inscribir("pedrito","fisica");

*/
//////////////*********//////////// */
/* HISTORIA COFLA 5 *//*  Solicitar datos y decirle si aprueba  o no 
                        Mostrar con colores representativos em consola 
                        REQUISITOS PARA APROBAR 90% ASISTENCIAS, promedio minimo de 7/10 y almenos el 75% de trabajos practicos*/
/*
let materias = { 
    fisica: [90,6,3,"fisica"],
    matematicas:[90,6,3,""],
    logica:[90,6,3,"ogica"],
    quimica:[90,6,3,"quimica"],
    calculo:[90,6,3," calculo"],
    programacion:[90,6,3,"programacion"],
    biologia:[90,6,3,"biologia"],
    bbdd:[90,6,3,"bbdd"],
    algebra:[90,6,3,"algebra"]
}

const aprobo = ()=>{
    for (materia in materias){ // Recorrer objeto materias
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materias[materia][3]); //mostrar materia
        if (asistencias >= 90) {//Validar asistencia
            console.log("%c  Asistencias en orden ","color:green");
        } else {
            console.log("%c  Falta de Asistencias","color:red");
        }
        if(promedio >= 7) { // Validar promedio
            console.log("%c   Promedio en orden","color:green");
        } 
        else{
            console.log("%c   Promedio desaprobado","color:red");
        }
        if (trabajos >= 3){ //Validar trabajos
            console.log("%c  Trabajos en orden ","color:green");
        }
        else {
            console.log("%c   Trabajos desaprobado","color:red");
        }
    }
}
aprobo();

/////// Problema 2 
// Cofla, debe trabajar 8 horas por dia durante 2 semanas entre las cuales tiene que : estudiar 24 horas, 24 horas haciendo trabajospracticos, 56 trabajando  y  8 horas haciendo tareas domesticas. El tiempo por tares no debe superar las 4 horas.
// Dividir el tiempo 8 horas casa / 14 dias =35minutos, 100 minuttos trabajos ,100 estudiar, 240 minutos trabajo

let trabajo = "240 minutosde trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos hacer trabajos practicos";
let homework = "30 minutos de descanso";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (var i = 0; i < 14; i++)  {
    if ( i == 0){
        console.group(" Semana 1");
    }


console.groupCollapsed("dia" + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 7) {
        console.groupEnd();
        console.groupCollapsed("Semana 2")
    }
}
console.groupEnd();
console.groupEnd();
*/
//// Ejercicios Cofla 6
/*
const contenedor = document.querySelector(".flex-conteiner");
/*
const boton = document.querySelector(".send-button");
let valorAntiguo = boton.valuetoUpperCase();
*//*
let contador = 0;

function crearLlave(nombre,modelo,precio){
    contador++;
    img = "<img src= `llave.png`>";
    nombre = `<h2>${nombre}<h2>`;
    modelo = `<h3>"{modelo}</h3>;`
    precio = `<p>Precio:${precio}</p>`

    return [nombre,modelo,precio];
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    let modeloRandom = Math.random()*1000;
    let precioRandom = Math.random()*10+30;
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modeloRandom
        });
    div.tabIndex=i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave;
    
    documentFragment.appendChild(div);
   
}

contenedor.appendChild(documentFragment);

const llave = crearLlave("Llave1","modeloX","33");


document.write[llave[0],llave[1],llave[2]];

/*
.felx-container{
  display: felx;
  flex-wrap: warp;
  justify-content: center ;
  font-family: sans-serif
}
.llave-img{
    width : 300px;
    margin: 20px;
    padding: 0 20px;
}

.fex-item{hover
    flex-grow:1;
    margin:;
    max-width:300px;
    border 2px solid;
    padding: 0 20px;

}
.fex-item:hover{
    border-color:#71a154;
    box-shadow: 0px 0px 13px #31754
}
.fex-item:focus{
    border-color:#71a154;
    box-shadow: 0px 0px 13px #31754
}

h3{
    color: #666;
}

p b {
    color:#999;
}

form{
    width
    text-align
    padding
}
input{
    backgorund
    color
    border
    padding
}
*/
