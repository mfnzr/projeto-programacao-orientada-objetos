"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
const Warrior_1 = require("../models/Warrior");
const Archer_1 = require("../models/Archer");
const Mage_1 = require("../models/Mage");
class CharacterService {
    createWarrior(name) {
        return new Warrior_1.Warrior(name);
    }
    createArcher(name) {
        return new Archer_1.Archer(name);
    }
    createMage(name) {
        return new Mage_1.Mage(name);
    }
    attack(character) {
        character.attack();
    }
    takeDamage(character, damage) {
        return character.takeDamage(damage);
    }
}
exports.CharacterService = CharacterService;
//# sourceMappingURL=Service.js.map