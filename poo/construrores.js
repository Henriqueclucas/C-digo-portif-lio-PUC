// Construtores 

function Pessoa4() {
    this.nome = ["Fulano", " de Tal"];
    this.anoDeNascimento = 1990;
    this.profissao = "Estudante";
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
}

const pessoa4 = new Pessoa4();
console.log(pessoa4);

// Funções que criam objetos

function Pessoa5(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
}

const pessoa5 = new Pessoa5(["Jon" , "Doe"], 1996, "Analista");
console.log(pessoa5);

// O construtor Object()

const pessoa6 = new Object();

console.log(pessoa6);

pessoa6.nome = ["Ken" , "Akani"];
pessoa6.anoDeNascimento = 1789;
pessoa6.profissao = "Killer";
pessoa6.calculaIdade = function(){
    return new Date.getFullYear() - this.anoDeNascimento;
};

console.log(pessoa6);

pessoa6.constructor();

function descobreTipo(objeto){
    if('Object' == objeto.constructor.name){
        console.log("O objeto é do tipo raiz");
    } else{
        console.log("O objeto é do tipo " + objeto.constructor.name);
    }
}; 

descobreTipo(pessoa6);
descobreTipo(pessoa5);