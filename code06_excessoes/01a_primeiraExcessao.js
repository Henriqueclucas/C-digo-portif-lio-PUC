try{
    throw new Error("Gerando um erro generico ");
}
    catch (e) {
        console.error(`${e.name}: ${e.message}`);
    }