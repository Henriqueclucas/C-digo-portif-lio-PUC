class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidarionError";
    }
}

function vaiDarErro(){
    throw new ValidationError("Dados invalidos ");

}

try{
    vaiDarErro()
}
catch(e){
    console.error(`${e.name}: ${e.message}`);
}