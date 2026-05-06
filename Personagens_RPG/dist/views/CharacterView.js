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
    // só coleta os dados, não cria nada
    askCharacterData(number) {
        console.log(`\n=== Personagem nº ${number} ===\n`);
        console.log("1 - Warrior / 2 - Archer / 3 - Mage\n");
        const classMap = {
            "1": CharacterClass_1.CharacterClass.WARRIOR,
            "2": CharacterClass_1.CharacterClass.ARCHER,
            "3": CharacterClass_1.CharacterClass.MAGE,
        };
        const classChoice = this.prompt("Classe: ");
        const characterClass = classMap[classChoice];
        if (!characterClass)
            throw new Error("Opção inválida!");
        const name = this.prompt("Nome: ");
        if (!name || name.trim() === "")
            throw new Error("Nome não pode ser vazio!");
        return { name, characterClass }; // só retorna os dados
    }
    askContinue() {
        const answer = this.prompt("Criar outro personagem? (s/n): ");
        return answer.toLowerCase() === "s";
    }
    showAllCharacters(characters) {
        console.log("\n=== Personagens Criados ===\n");
        characters.forEach((character, index) => {
            console.log(`--- Personagem ${index + 1} ---`);
            this.showCharacterInfo(character);
        });
    }
    showCharacterInfo(character) {
        console.log(`
      Nome:   ${character.name}
      Classe: ${character.class}
      Level:  ${character.level}
      Saúde:  ${character.health}
    `);
    }
}
exports.CharacterView = CharacterView;
//# sourceMappingURL=CharacterView.js.map