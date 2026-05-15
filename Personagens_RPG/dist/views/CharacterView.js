"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterView = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const CharacterClass_1 = require("../enums/CharacterClass");
//INTERAÇÕES COM O USUÁRIO - COLETA DADOS E EXIBE INFORMAÇÕES
class CharacterView {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    setController(controller) {
        this.controller = controller;
    }
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
        return { name, characterClass }; //retorna os dados
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
    askBattle(characters) {
        console.log("\n=== Batalha! ===\n");
        console.log("Escolha o atacante:");
        characters.forEach((c, i) => console.log(`${i + 1} - ${c.name} (${c.class})`));
        const attackerIndex = parseInt(this.prompt("Atacante: ")) - 1;
        console.log("\nEscolha o defensor:");
        characters.forEach((c, i) => console.log(`${i + 1} - ${c.name} (${c.class})`));
        const defenderIndex = parseInt(this.prompt("Defensor: ")) - 1;
        const criticalAnswer = this.prompt("Ataque crítico? (s/n): ");
        const critical = criticalAnswer.toLowerCase() === "s";
        return { attackerIndex, defenderIndex, critical };
    }
    showAttackResult(attacker, defender, damage, critical) {
        console.log(`
    ${critical ? "ATAQUE CRÍTICO!" : ""}
    ${attacker.name} atacou ${defender.name}!
    Dano causado: ${damage}
    Saúde de ${defender.name}: ${defender.health}
    ${defender.health <= 0 ? `${defender.name} foi derrotado!` : ""}
    `);
    }
}
exports.CharacterView = CharacterView;
//# sourceMappingURL=CharacterView.js.map