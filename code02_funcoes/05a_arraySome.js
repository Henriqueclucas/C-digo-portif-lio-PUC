//O objetivo da função SOME é investigar se pelo menos um dos elementos que compões esse array tem um comportamento 

array = [4, 5, 6, 7, 8, 9, 10];

regraImpar = (item) => item%2 ==0;

console.log("Há algum impar? " + array.some(regraImpar));

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

console.log("Há algum numero primo? " + array.some(regraPrimo));
