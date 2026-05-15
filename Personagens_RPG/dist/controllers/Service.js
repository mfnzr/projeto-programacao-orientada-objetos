"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
const Warrior_1 = require("../models/Warrior");
const Archer_1 = require("../models/Archer");
const Mage_1 = require("../models/Mage");
//REGRAS DE NEGOCIO - CRIA OS PERSONAGENS E REALIZA AÇÕES COMO ATAQUE E TOMAR DANO
class CharacterService {
    constructor() {
        this.characters = []; //armazena os personagens criados
    }
    createWarrior(name) {
        const warrior = new Warrior_1.Warrior(name);
        this.characters.push(warrior); //salva automaticamente na lista
        return warrior;
    }
    createArcher(name) {
        const archer = new Archer_1.Archer(name);
        this.characters.push(archer);
        return archer;
    }
    createMage(name) {
        const mage = new Mage_1.Mage(name);
        this.characters.push(mage);
        return mage;
    }
    getAllCharacters() {
        return this.characters;
    }
    attack(character) {
        character.attack();
    }
    attackCharacter(attacker, defender, critical) {
        const damage = attacker.attack(); // pega o dano do atacante
        const multiplier = critical ? 2 : 1; // dano critico dobra o dano
        defender.takeDamage(damage, multiplier); // aplica no defensor, usando a sobrecarga com o multiplicador
        return damage * multiplier; // retorna pra view exibir
    }
    takeDamage(character, damage) {
        return character.takeDamage(damage);
    }
}
exports.CharacterService = CharacterService;
//# sourceMappingURL=Service.js.map