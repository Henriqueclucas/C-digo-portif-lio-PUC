// ME permite fazer uma operação sob cada elemento que tem na minha lista, pode ser chamado de metodo terminador.


array = [4,5,6,7,8,9,10];

array.forEach(
    (nro) => console.log(
        nro+
        "-> " +
        ((nro%2==0?"par":"impar"))
    )
)

nroDivisores = (item) =>{
    let ndvi = 0;
    for(let divisor =1; divisor<item; divisor++)
        if((item%divisor) ==0)
            ndvi++;
        return ndvi;
}

array.forEach(
    (nro) => console.log(
        nro +
        `-> nDivisores de 1 até ${nro} = ` + 
        nroDivisores(nro)
    ) 
)