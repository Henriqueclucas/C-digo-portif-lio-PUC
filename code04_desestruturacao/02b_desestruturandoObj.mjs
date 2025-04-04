import { UmaClasse } from "./02a_desestruturandoObj.mjs";

let umaClasse = new umaClasse("Primeiro atributo")

let {capturaPrimeiroAtributo: umAtributo, outroAtributo} = umaClasse;

console.log("um atributo: " + umAtributo);
console.log("Outro atributo: " + outroAtributo);