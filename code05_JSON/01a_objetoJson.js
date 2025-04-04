//JavaScript prove o metodo JSON.strinfy
// Converte um objeto para o formato JSON(string)
// CUIDADO: não pode existir referencias circulares dentro do objeto

let student ={
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);
console.log(json);
