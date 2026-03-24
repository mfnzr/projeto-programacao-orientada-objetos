"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
const CharacterClass_1 = require("../enums/CharacterClass");
const Character_1 = require("./Character");
class Archer extends Character_1.Character {
    constructor(name, level, health) {
        super(name, level, health, CharacterClass_1.CharacterClass.ARCHER);
    }
    //aqui estou sobrescrevendo o método attack da classe Character, ou seja,
    //estou implementando a lógica específica para o ataque do Arqueiro
    attack() {
        return 10 + this.level * 3;
    }
}
exports.Archer = Archer;
//# sourceMappingURL=Archer.js.map