import * as rs from'readline-sync';

let largoArreglo:number=rs.questionInt('Cual es el largo del arreglo? ');
let arreglo:number[] = new Array(largoArreglo);
let arreglo2:number[]= new Array(largoArreglo);
let a1:number=0;

for(let i=0; i<arreglo.length;i++){
    console.log('----------------------------');
    arreglo[i]=rs.questionInt('Ingrese un numero ');
}

console.log(arreglo);



for(let i = arreglo.length - 1; i>=0 ; i--){
    arreglo2[i]=arreglo[a1];
    a1++;
} 

console.log(arreglo2);
