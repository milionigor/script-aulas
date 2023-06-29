const entradas =[8,30,4,8,20,9,10,15,1];
let i =0;

function gets () {
    const valor = entradas [i];
    i++;
    return valor;
}
const N =gets ();
let maiornumeropar = 0;
let menornumeroimpar = 0;

for (let i= 0; i < N; i++) {
    const numero = parseInt(gets());
     if (numero% 2 === 0 ){
        if( numero >maiornumeropar){
            maiornumeropar=numero;
        }
     }else{
        if(menornumeroimpar === 0){
            menornumeroimpar=numero;
        }else if(numero<menornumeroimpar){
            menornumeroimpar=numero;
        }
     }

    
}
console.log(` maiornumeropar ` +maiornumeropar);
console.log (` menornumeroimpar `+menornumeroimpar);




