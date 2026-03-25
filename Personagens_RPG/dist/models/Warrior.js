"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    constructor(name) {
        super(name);
    }
    //aqui estou sobrescrevendo o método attack da classe Character, ou seja,
    //estou implementando a lógica específica para o ataque do Guerreiro
    //polimorfismo - usando o mesmo para vários tipos de personagens
    //sobrescrita de método - cada classe tem sua própria implementação do método attack
    attack() {
        return 15 + this.level * 2;
    }
}
exports.Warrior = Warrior;
//# sourceMappingURL=Warrior.js.map