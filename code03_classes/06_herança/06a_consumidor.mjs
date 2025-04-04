import { CarroComPlaca } from "./06a_carroComPlaca.mjs";
import { Carro } from "../05_classeSimples/05a_carro.mjs";

var locadora = new Locadora()
locadora.adicionarCarro(new CarroComPlaca("ABC-3456"))
locadora.adicionarCarro(new CarroComPlaca("CDF-4667"))

locadora.abastecerCarro(0, 30);
locadora.consultarCarros();

locadora.abastecerCarro(1, 30);
locadora.abastecerCarro(0, 30)
locadora.consultarCarros();

