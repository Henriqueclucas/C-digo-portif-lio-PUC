let nomeCompleto = ["Armin", "Silva", "Santos"];
var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log("O primeiro nome é: " + primeiroNome);
console.log("O nome do meio é: "  + nomeDoMeio);
console.log("O ultimo nome é: " + ultimoNome);

//jogando os outros itens para a variavel RESTANTE
var[primeiroNome, ...restante] = nomeCompleto;
console.log("O primeiro nome é: " + primeiroNome);
console.log("O restante do nome é: \"" + restante.toString().replace(',', ' ')+ '"' );

var [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto;
console.log("O primeiro nome é: " + soOPrimeiroNome);
console.log("O ultimo nome é: " +soOUltimoNome)