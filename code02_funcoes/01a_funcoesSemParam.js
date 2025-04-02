function funcaoSemRetorno(){
    console.log("Alo mundo");
};

function funcaoComRetorno(){
    return "Alo mundo";
};

let msg = funcaoSemRetorno();
console.log(msg);

msg = funcaoComRetorno();
console.log(msg);

