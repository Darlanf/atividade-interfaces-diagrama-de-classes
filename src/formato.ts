export interface FormatoDoElemento {
  desenhar(): void;
  redimensionar(
    comprimento?: number,
    altura?: number,
    raio?: number
  ): void;
}

export class Retangulo
  implements FormatoDoElemento
{
  comprimento: number;
  altura: number;

  constructor(
    comprimento: number,
    altura: number
  ) {
    this.altura = altura;
    this.comprimento = comprimento;
  }

  desenhar(): void {
    console.log(
      `Retangulo com comprimento de ${this.comprimento}cm e altura de ${this.altura}cm desenhado`
    );
  }
  redimensionar(
    comprimento: number,
    altura: number
  ): void {
    this.comprimento = comprimento;
    this.altura = altura;
  }
}

export class Circulo
  implements FormatoDoElemento
{
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  desenhar(): void {
    console.log(
      `Circulo com raio de ${this.raio}cm desenhado`
    );
  }
  redimensionar(raio: number): void {
    this.raio = raio;
  }
}
