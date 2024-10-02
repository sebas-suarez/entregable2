import * as rs from 'readline-sync';

    
let arreglo1:number[] = new Array(6);
let arreglo2:number[] = new Array(6);
let sumaArreglos:number[] = new Array(6);



for(let i=0; i<arreglo1.length; i++){
    arreglo1[i]=rs.questionInt('Ingrese un numero ');
}
console.log('-----------------------------------------------');

for(let i = 0;i<arreglo2.length;i++){
    arreglo2[i]=rs.questionInt('Ingrese un numero ');
}
console.log('-----------------------------------------------');

for(let i = 0;i<sumaArreglos.length;i++){
    sumaArreglos[i]=arreglo1[i]+arreglo2[i];
}


console.log(
`    la suma de ${arreglo1[0]} + ${arreglo2[0]} es: ${sumaArreglos[0]}
    la suma de ${arreglo1[1]} + ${arreglo2[1]} es: ${sumaArreglos[1]}
    la suma de ${arreglo1[2]} + ${arreglo2[2]} es: ${sumaArreglos[2]}
    la suma de ${arreglo1[3]} + ${arreglo2[3]} es: ${sumaArreglos[3]}
    la suma de ${arreglo1[4]} + ${arreglo2[4]} es: ${sumaArreglos[4]}
    la suma de ${arreglo1[5]} + ${arreglo2[5]} es: ${sumaArreglos[5]}`);
