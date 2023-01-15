export class Pedido {
  public itens: Item[];
  public valorTotal: number;

  constructor() {
    this.itens = [];
    this.valorTotal = 0;
  }

  addItens(item: Item) {
    this.itens.push(item);
    this.valorTotal += item.valor;
    console.log(
      `Item ${item.nome} adicionado com sucesso! Valor: R$ ${item.valor}. Total: R$ ${this.valorTotal}`
    );
    console.log(this.itens);
  }
}

export class Item {
  public valor: number;
  public nome: string;
  public descricao: string;

  constructor(
    valor: number,
    nome: string,
    descricao: string
  ) {
    (this.valor = valor),
      (this.nome = nome),
      (this.descricao = descricao);
  }
}
