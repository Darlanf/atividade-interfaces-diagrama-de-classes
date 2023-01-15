export class Animal {
  nome!: string;
  raça!: string;
  tamanho!: number;
  idade!: number;
  vacinado!: boolean;

  alimentar(): void {}
  vacinar(): void {}
  castrar(): void {}
}

export class Cachorro extends Animal {
  feroz!: boolean;

  latir(): void {}
  colocarColeira(): void {}
}

export class Cavalo extends Animal {
  competidor!: boolean;

  relinchar(): void {}
  cavalgar(): void {}
}

export class Gato extends Animal {
  peludo!: boolean;

  miar(): void {}
  tosar(): void {}
}
