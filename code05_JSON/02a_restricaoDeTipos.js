/* Cuidado: Não assuma que a conversão suporta qualquer tipo!
O exemplo a seguir utiliza um objeto DATE, que é serializado como String e , portanto, não e desserelizado
automaticamente para DATE.
Deve-se utilizar a função reviver, que é um dos parametros da função JSON.parse


*/

var json = '{"name" : "Jon", "birth" : "2017-11-30T12:00:00.000Z", "city" : "Porto Alegre"}'
    
var obj = JSON.parse(json, function(key, value){
if(key == birth){
        return new Date(value);
    }
    return value;
});

console.log("nome: " + obj.name);
console.log("Dnasc: " + obj.birth);


