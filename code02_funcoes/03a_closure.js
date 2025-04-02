//Função que se lembra do ambiente em que foi criada
//Permite associar dados do ambiente como uma função que trabalha esses dados 
//Execução com contexto
//Diretamente ligado com programação orientada a objetos
//Objetos nos permitem associar dados utilizando um ou mais metodos

function somaValores(x){
    return function(y){
        return x + y;
    };

};

var soma5 = somaValores(5);
console.log(soma5(2));