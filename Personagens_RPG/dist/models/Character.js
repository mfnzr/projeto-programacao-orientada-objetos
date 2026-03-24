"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, level, health, characterClass) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.characterClass = characterClass;
    }
    takeDamage(damage) {
        this.health -= damage;
        return damage;
    }
}
exports.Character = Character;
//# sourceMappingURL=Character.js.map