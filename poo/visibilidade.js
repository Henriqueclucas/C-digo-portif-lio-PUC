/* Pensamos em ENCAPSULAMENTO, atributos e metodos podem ser
Publicos: é o modo padrão
Privados: algumas formas de fazer - variaveis locais - identificadores pré-fixados
*/

// variaveis locais

function Pessoa(){
    let nome =["fulano", "de tal"];
    let anoDeNascimento = 1990;
    let profissao;
    this.calculaIdade = function(){
        return new Date().getFullYear() - anoDeNascimento;
    };

};

const pessoa = new Pessoa();
console.log(pessoa);

// identificadores pré-fixados
//Marcar com # qualquer atributo que você queira que seja privado

class Estudante extends Pessoa{
    #matricula;
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
    };

    ola(){
        super.ola();
        console.log("colega");
    };
};

const aluno = new Estudante (['Andy', 'Borgard'], 1990, 'Estudante', 1247654);
console.log(aluno);

// Metodos de acesso

class Estudade extends Pessoa{
    #matricula;
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
    };
    get Matricula(){
        return this.#matricula;
    };
};

const aluno1 = new Estudade(['Andy', 'Borgard'], 1990, 'Estudante', 1247654)
console.log(aluno.getMatricula());

//metodos de atribuição

class Estudade extends Pessoa{
    #matricula;
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
    };
    get Matricula(){
        return this.#matricula;
    };
    set Matricula(valor){
        this.#matricula = valor ;
    };
};

const aluno2 = new Estudade(['Andy', 'Borgard'], 1990, 'Estudante', 1247654);
console.log(aluno.getMatricula);
aluno2.setMatricula(1234556);
console.log(aluno.getMatricula());
