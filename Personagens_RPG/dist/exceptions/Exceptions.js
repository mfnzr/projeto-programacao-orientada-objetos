"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterNotFoundException = exports.EmptyNameException = exports.InvalidOptionException = void 0;
class InvalidOptionException extends Error {
    constructor() {
        super("Opção inválida!");
        this.name = "InvalidOptionException";
    }
}
exports.InvalidOptionException = InvalidOptionException;
class EmptyNameException extends Error {
    constructor() {
        super("Nome não pode ser vazio!");
        this.name = "EmptyNameException";
    }
}
exports.EmptyNameException = EmptyNameException;
class CharacterNotFoundException extends Error {
    constructor() {
        super("Personagem não encontrado!");
        this.name = "CharacterNotFoundException";
    }
}
exports.CharacterNotFoundException = CharacterNotFoundException;
//# sourceMappingURL=Exceptions.js.map