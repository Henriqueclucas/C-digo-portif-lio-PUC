function testVar(){
    var var01 = "var 01"
    {
        var var02 = "var 02"
        console.log('ola.' + var01);
        console.log('ola. ' + var02);

    }
    console.log("02a. " + var01);
    console.log('02b, ' + var02);
}

testVar();