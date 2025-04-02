//função atribuida a variavel como argumento

function decision( question, doOk, doCancel){
    if(question == "Ok"){
        doOk();
    }else{
        doCancel();
    };
} ;

let beOk = function showOk(){
    console.log("You agreed");
};

let beCancel = function showCancel(){
    console.log("You canceled the execution");
};

decision("Ok", beOk, beCancel);
decision("Cancel", beOk, beCancel);