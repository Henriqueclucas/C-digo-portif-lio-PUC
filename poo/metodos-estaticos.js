class ValidadorCPF {
    static validar (cpf, tamanho){
        if(tamanho == 11){
            return true;
        } else{
            return false;
        };
    } ;
};

console.log(ValidadorCPF.validar('123456678', 10));

// Atributos estaticos

class Pessoa{
    static NOME_CLASSE = "Pessoa";
    constructor (nome, anoDeNascimento, profissao){
        this.nome = nome,
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    static ola(){
        console.log("Ola");
    };

    calculaIdade(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };


};

console.log(Pessoa.ola());

/*Metodos estáticos: Lógica que é executada da mesma maneira em qualquer objeto de um tipo ou classe
Metodos utilitatios, idependentes de objetos
Para usar, não precisa criar um objeto */