var somar = () => console.log("Função sem parametros");
somar();
somar(1);

somar = _=> console.log("usando underscore");
somar();

// quando se utiliza uma expressão, soma nesse caso, não preciso incluir a palavra Retunr
somar = (x,y) => x + y;
console.log(somar(1,2));

//quando se usa as chaves é necessario a utilização do retunr 
somar = (x,y) => {return x + y};
console.log(somar(3,4));

//retorna maior numero
somar = (x,y) => x>y?x:y;
console.log(somar(5,6));

somar = (x,y) =>{
    if(x>y){
        return x;
    } else{
        return y;
    }
};

console.log(somar(7,8));