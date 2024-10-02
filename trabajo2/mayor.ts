import * as rs from 'readline-sync';

let tamano:number=rs.questionInt('Cuantos numeros desea almacenar? ');
let numeros:number[]= new Array(tamano);
let mayor:number=0;
for(let i=0;i<numeros.length;i++){
    numeros[i]=rs.questionInt('Dime un numero que quieras almacenar ');
}

for(let i=0;i<numeros.length;i++){
    if(numeros[i]>mayor){
        mayor=numeros[i];
        
        
    }
}

if(mayor%2==0){
    console.log('el numero mayor del Array es '+ mayor+' y es un numero par!');

}else{
    console.log('el numero mayor del Array es '+mayor+' y es un numero impar! ');
    
}