"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterView = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const CharacterClass_1 = require("../enums/CharacterClass");
class CharacterView {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    setController(controller) {
        this.controller = controller;
    }
    start() {
        console.log("=== Criação de Personagem ===\n");
        console.log("Escolha a classe:");
        console.log("1 - Warrior");
        console.log("2 - Archer");
        console.log("3 - Mage\n");
        const classChoice = this.prompt("Digite o número da classe desejada: ");
        const classMap = {
            "1": CharacterClass_1.CharacterClass.WARRIOR,
            "2": CharacterClass_1.CharacterClass.ARCHER,
            "3": CharacterClass_1.CharacterClass.MAGE,
        };
        const className = classMap[classChoice];
        if (!className) {
            console.log("Opção inválida!");
            return;
        }
        const name = this.prompt("Digite o nome do personagem: ");
        if (!name || name.trim() === "") {
            console.log("Nome não pode ser vazio!");
            return;
        }
        const character = this.controller.createAndShowCharacter(name, className);
        this.showCharacterInfo(character); // chama com this.
    }
    showCharacterInfo(character) {
        console.log(`
      === Personagem Criado! ===
      Nome:   ${character.name}
      Classe: ${character.class}
      Level:  ${character.level}
      Saúde:  ${character.health}
      Ataque: ${character.attack()}
    `);
    }
}
exports.CharacterView = CharacterView;
//# sourceMappingURL=CharacterView.js.map