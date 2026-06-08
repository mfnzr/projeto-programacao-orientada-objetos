export class InvalidOptionException extends Error {
  constructor() {
    super("Opção inválida!");
    this.name = "InvalidOptionException";
  }
}

export class EmptyNameException extends Error {
  constructor() {
    super("Nome não pode ser vazio!");
    this.name = "EmptyNameException";
  }
}

export class CharacterNotFoundException extends Error {
  constructor() {
    super("Personagem não encontrado!");
    this.name = "CharacterNotFoundException";
  }
}