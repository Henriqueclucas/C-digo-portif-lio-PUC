export class Circulo{
    constructor(r){
        this.raio = r;
    }
    area(){
        return Math.Pi * this.raio ** 2;
    }
    circunferencia(){
        return 2* Math.PI * this.raio;
    }
}