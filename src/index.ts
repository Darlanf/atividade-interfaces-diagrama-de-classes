import { Item, Pedido } from "./pedido";
import { Circulo, Retangulo } from "./formato";

console.log("======> Atividade 1 <======");

let item1 = new Item(
  100,
  "monitor",
  "24 polegadas"
);

let item2 = new Item(50, "teclado", "sem numpad");

let pedido1 = new Pedido();
pedido1.addItens(item1);
pedido1.addItens(item2);
console.log(pedido1);

// pedido1.addItens(item2);

console.log("======> Atividade 2 <======");

let figura1 = new Retangulo(10, 5);
figura1.redimensionar(7, 5);
figura1.desenhar();

let figura2 = new Circulo(7);
figura2.redimensionar(6);
figura2.desenhar();
