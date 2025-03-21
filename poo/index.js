var pessoa = {nome : "Henrique", 
    idade : 31,
    saudar : function(){
        console.log("Olá");
    }        
};


var pessoa1 = {nome : "Maria",
    idade : 20,
    saudar: function(){
        console.log("Oi");
    }
};

//alterando atributo

pessoa.idade = 20;


//alterando metodo
pessoa.saudar = function(){
    console.log("Salve");
};

pessoa.saudar();
console.log(pessoa.idade);

//metodo com parametro

pessoa1.saudar = function(nomeDoAmigo){
    console.log("Ola " + nomeDoAmigo + "!!");
};

pessoa1.saudar(); //resultado undefined pois preciso passar o valor
pessoa1.saudar("Jack");

// objeto feito de forma literal
const empregado = {
    salarioBase : 5000,
    valorHoraExtra : 100,
    qtdHoraExtra : 10,
    calculaSalario : function(){
        return this.salarioBase + (this.valorHoraExtra * this.qtdHoraExtra);
    }
};

console.log(empregado.calculaSalario());