function Pessoa(nome, anoDeNascimento, profissao){
    this.nome = nome
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function (){
        return new Date().getFullYear - this.anoDeNascimento;
        
    }
    
};

const pessoa = new Pessoa(["Jill", "Redfield"], 1987, "Agente BCAA");
console.log(pessoa(calculaIdade));

Pessoa.prototype.saudar = function(){
    console.log("Ola");
};
console.log(pessoa.saudar());