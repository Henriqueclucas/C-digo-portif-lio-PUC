// Classes tão são formas de criar objetos, só que elas criam objetos através de modelos

// A pessoa vai ter um conjunto de regras quando é uma classe. Primeira coisa: ela tem que ter um construtor. Todo objeto tem que ter 
// uma forma de ser construido.

    class Pessoa{
        constructor(nome, anoDeNascimento, profissao){
            this.nome = nome;
            this.anoDeNascimento = anoDeNascimento;
            this.profissao = profissao;
        };

        ola(){
            console.log("Ola meu nome é " + this.nome);
        };

        calcularIdade(){
            return new Date().getFullYear() - this.anoDeNascimento;
        };

    };
    
    const pessoa = new Pessoa(["Ichigo", "Kurosaki"], 1995, "Soul Reaper");
    console.log(pessoa);

    // Classes usando Herança

    class Estudante extends Pessoa{
        constructor(nome, anoDeNascimento, profissao, matricula){
            super(nome, anoDeNascimento, profissao);
            this.matricula = matricula;
        };
    }; 

    const aluno = new Estudante(["Fulano", "De tal"], 1997, "Estudante", 1234655);
    console.log(aluno);

    class Professor extends Pessoa{
        constructor(nome, anoDeNascimento, titulacao){
            super(nome, anoDeNascimento, "Professor");
            this.titulacao = titulacao;
        };
    }; 

    const professor = new Professor(["Jorge" , "Silva"], 1967, "Mestre");
    console.log(professor);

    //polimorfismo

    class Estudante1 extends Pessoa{
        constructor(nome, anoDeNascimento, profissao, matricula){
            super(nome, anoDeNascimento, profissao);
            this.matricula = matricula;
        };
        ola(){
            super.ola();
            console.log(' colegas');
        }
    }; 

    const aluno1 = new Estudante1(["Fulano", "O tal"], 1997, "Estudante", 1234655);
    console.log(aluno1);

    aluno1.ola();

    