//Tem o objetivo de fazer uma consulta sobre os valores e entregar um resultado baseado nessa consulta

array = [4,5,6,7,8,9,10];

let resultado = array.reduce(
    (acc, val) => acc+=(val%2==0)? val:0,0
)

console.log("A soma dos numeros pares é: " + resultado);