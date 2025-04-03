//É uma estretura onde todos os elementos tem que ter aquele comportamento, caso contraio o resultado é nulo

array = [4, 5, 6, 7, 8, 9, 10];

regraImpar = (item) => item%2 !=0;

console.log("Todos os numeros são impar? " + array.every(regraImpar));

regraPrimo = (item) =>{
    let ndvi = 0;
    for(let divisor = 1; divisor<=item; divisor++); 
    if((item%divisor)==0){
        ndiv++;
    }



    if(ndvi == 2){
        return true;
    } else{
        return false;
    };
};

console.log("Todos os numeros são primos? " + array.every(regraPrimo));
