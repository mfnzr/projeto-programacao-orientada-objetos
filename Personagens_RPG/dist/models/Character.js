"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name) {
        this._name = name;
        this._level = 1;
        this._health = 100;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.trim() !== "") {
            this._name = value;
        }
        throw new Error("Name cannot be empty");
    }
    get level() {
        return this._level;
    }
    set level(value) {
        if (value > 0) {
            this._level = value;
        }
        throw new Error("Level must be greater than 0");
    }
    get health() {
        return this._health;
    }
    set health(value) {
        if (value < 0)
            this._health = 0; // não deixa vida negativa
        else
            this._health = value;
    }
    takeDamage(damage) {
        this.health -= damage;
        return damage;
    }
}
exports.Character = Character;
//# sourceMappingURL=Character.js.map