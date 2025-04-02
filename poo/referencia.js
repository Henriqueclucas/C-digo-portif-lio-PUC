// ao copiar o objeto pessoa1 e atribuir um novo ano de nascimento para pessoa2 o dado é alterado em ambos pois ambos apontam para o mesmo dado na memoria


function criarPessoa(){
    return{
        nome: "Fulano de tal",
        anoDeNascimento: 1999,
        profissao: "estudante"
    };
};

const pessoa1 = criarPessoa();
const pessoa2 = pessoa1;
pessoa2.anoDeNascimento = 1987;
console.log(pessoa1);
console.log(pessoa2);

pessoa1.formacao = 'Advogado';


