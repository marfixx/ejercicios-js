const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

//Solucion al ejercicio 1
let primos="Respuesta: ";

ejercicio1.forEach(element => {
  if(isPrime(element)){
  primos+=element+', ';
  }
});

document.getElementById('uno').innerHTML=primos.slice(0,-2)+'.';

function isPrime(number) {
  var times=0;
  for(var i=1;i<=number;i++){
    if(Number.isInteger(number/i)){
      times++;
      if(times>2){
        return false;
      }
    }
  }

  if(times==2){
    return true;
  }else{
    return false;
  }


}

//Solución al ejercicio 2
var usuarios="Pasan: ";
ejercicio2.forEach(element=>{
if(element.edad>=18&&element.esFamiliar){
  usuarios+=element.nombre+", ";
}
});

document.getElementById('dos').innerText=usuarios.slice(0,-2)+'.';

//Solucion al ejercicio3
var semilla=1;
var sucesor=1;
var fibo="1(1), 1(2), ";
for(var i=1;i<49;i++){
  aux=sucesor;
  sucesor+=semilla;
  semilla=aux;
  fibo+=sucesor+"("+(i+2)+"), ";

}

document.getElementById('tres').innerText=fibo.slice(0,-2)+'.';
