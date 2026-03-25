"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    constructor(name) {
        super(name); //chama o construtor da classe pai
    }
    //aqui estou sobrescrevendo o método attack da classe Character, ou seja,
    //estou implementando a lógica específica para o ataque do Mago
    attack() {
        return 20 + this.level;
    }
}
exports.Mage = Mage;
//# sourceMappingURL=Mage.js.map