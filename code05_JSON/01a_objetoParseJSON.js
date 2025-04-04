//o metodo JSON.parse converte uma string em um objeto

let user = '["nome" : "Jon", "age": 35, "isAdmin": false, "friends": [0,1,2,3,4]]'
//propriedade ainda não existente, por isso ira dar erro
console.log(user.friends[0]);

//convertendo para objeto 
user = JSON.parse(user);
console.log(user.friends[0]);