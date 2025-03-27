// Mecanismo de herança entre objetos

function Pessoa(){
    this.nome = ["Trevor", "Belmont"];
    this.anoDeNascimento = 1456;
    this.profissao = "Vampire Killer";
    this.calculaIdade = function (){
        return new Date().getFullYear - this.anoDeNascimento;
    }
    
};

const pessoa = new Pessoa();
console.log(pessoa.valueOf());

// JavaScript é descrita como uma linguagem baseada em prototipos
//Objetos podem ter um objeto de protótipo que MODELO que fornece atributos e métodos
// Um protóripo pode ter outro objeto (e assim por diante), é a chamada cadeia de protótipos 

// O QUE PARA NÓS É UMA VISÃO DE HERANÇA, PARA O JAVASCRIPT, A GENTE CHAMA DE CADEIA DE PROTÓTIPOS.

//Formas de acessar 

Object.getPrototypeOf(pessoa);

// o comando __proto__ só pode ser usado no console

// Todo objeto possui uma propriedade chamada PROTOTYPE

function Pessoa0(){
    this.nome = ["Hector", "Belmont"];
    this.anoDeNascimento = 1234;
    this.profissao = "Vampire Killer";
    this.calculaIdade = function (){
        return new Date().getFullYear - this.anoDeNascimento;
    }
    
};

const pessoa0 = new Pessoa0();
console.log(Object.getPrototypeOf(pessoa0));

//O metodo Object.create() usa protótipos

const pessoa2 = new Object()
    pessoa2.nome = ["Victor", "Belmont"];
    pessoa2.anoDeNascimento = 1874;
    pessoa2.profissao = "Vampire Killer";
    pessoa2.calculaIdade = function (){
        return new Date().getFullYear - this.anoDeNascimento;
    };


console.log(Object.getPrototypeOf(pessoa2));

const pessoa3 = Object.create(pessoa2);
console.log(Object.getPrototypeOf(pessoa3));