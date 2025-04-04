export class Carro{
    #_tanque;
    #_capacidadeDoTanque;
    constructor(valor){
        this.#_tanque = 0;
        this.#_capacidadeDoTanque = valor;
    }

    get taque(){
        return this.#_tanque
    }

    get capacidade(){
        return this.#_capacidadeDoTanque
    }

    set tanque(qtd){
        if(qtd >= 0){
            if(qtd + this.#_tanque > this.#_capacidadeDoTanque)
                this.#_tanque = this.#_capacidadeDoTanque;
        } else{
            this.#_tanque += qtd;
        }
    }





}