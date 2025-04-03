//Junntando as operações
array = [2,3,4,5,6,7,8,9,10]

nroDivisores = (item) =>{
    let ndvi = 0;
    for(let divisor =1; divisor<item; divisor++)
        if((item%divisor) ==0)
            ndvi++;
        return ndvi;
}


array.filter((nro) => nroDivisores(nro) == 2);
array.map((item)=> {return{x:item, par:(item%2) == 0}});
array.forEach((obj) => console.log(obj.x + 'é par? ' + obj.par))