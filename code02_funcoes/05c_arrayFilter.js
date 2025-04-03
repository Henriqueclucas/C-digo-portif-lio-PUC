//Ele pega um array existente e devolve um novo array seguindo os comandos passados


array = [4, 5, 6, 7, 8, 9, 10];

regraImpar = (item) => item%2 !=0;

console.log("Filtrar numero impar? " + array.filter(regraImpar));

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

console.log("Filtrar os numeros primos? " + array.filter(regraPrimo));
 