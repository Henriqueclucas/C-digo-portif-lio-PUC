// exemplo de função como argumento 
function decision (question, doOk, doCancel){
    if(question == "ok") {
        doOk()
    } else{
        doCancel();
    };

};

function showOk(){console.log("You agreed");}

function showCancel(){console.log("You canceled the execution");}

decision("Ok", showOk, showCancel);
decision("Cancel", showOk, showCancel);