"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterView = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const CharacterClass_1 = require("../enums/CharacterClass");
const Exceptions_1 = require("../exceptions/Exceptions");
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
            throw new Exceptions_1.InvalidOptionException();
        const name = this.prompt("Nome: ");
        if (!name || name.trim() === "")
            throw new Exceptions_1.EmptyNameException();
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
    askBattle(entities) {
        console.log("\n=== Batalha! ===\n");
        console.log("Escolha o atacante:");
        entities.forEach((e, i) => console.log(`${i + 1} - ${e.name}`));
        const attackerIndex = parseInt(this.prompt("Atacante: ")) - 1;
        if (!entities[attackerIndex])
            throw new Exceptions_1.CharacterNotFoundException();
        console.log("\nEscolha o defensor:");
        entities.forEach((e, i) => console.log(`${i + 1} - ${e.name}`));
        const defenderIndex = parseInt(this.prompt("Defensor: ")) - 1;
        if (!entities[defenderIndex])
            throw new Exceptions_1.CharacterNotFoundException();
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