export interface TipoUsuario {
  nome: string;
  id: number;
  idade: number;
  email: string;
  senha: string;
  notas: string[];

  mostrarUsuario(): void;
  mudarEmail(email: string): void;
  mudarSenha(senha: string): void;
}

export class Usuario implements TipoUsuario {
  nome: string;
  id: number;
  idade: number;
  email: string;
  senha: string;
  notas: string[];
  logado: boolean;

  constructor(
    nome: string,
    idade: number,
    email: string,
    senha: string
  ) {
    (this.nome = nome),
      (this.idade = idade),
      (this.email = email),
      (this.senha = senha),
      (this.id = Math.floor(Math.random() * 10));
    this.notas = [];
    this.logado = false;
  }
  mostrarUsuario(): void {
    console.log(`Usuário: ${this.nome}`);
    console.log(`idade: ${this.idade}`);
    console.log(`email: ${this.email}`);
    console.log(`notas: ${this.notas}`);
  }
  mudarEmail(email: string): void {
    this.email = email;
  }
  mudarSenha(senha: string): void {
    this.senha = senha;
  }

  adicionarNota(nota: string) {
    this.notas.push(nota);
  }
  deletarUltimaNota() {
    this.notas.pop;
  }
}
