"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterClass_1 = require("../enums/CharacterClass");
const Archer_1 = require("../models/Archer");
const Warrior_1 = require("../models/Warrior");
describe("Character", () => {
    it("deve criar um Warrior com valores padrão", () => {
        const warrior = new Warrior_1.Warrior("Aragorn");
        expect(warrior.name).toBe("Aragorn");
        expect(warrior.level).toBe(1);
        expect(warrior.health).toBe(100);
        expect(warrior.class).toBe(CharacterClass_1.CharacterClass.WARRIOR);
    });
    it("deve calcular o ataque do Warrior corretamente", () => {
        const warrior = new Warrior_1.Warrior("Aragorn");
        expect(warrior.attack()).toBe(15 + warrior.level * 2);
    });
    it("deve calcular o ataque do Archer corretamente", () => {
        const archer = new Archer_1.Archer("Legolas");
        expect(archer.attack()).toBe(10 + archer.level * 3);
    });
    it("deve reduzir a saúde ao tomar dano", () => {
        const warrior = new Warrior_1.Warrior("Aragorn");
        warrior.takeDamage(20);
        expect(warrior.health).toBe(80);
    });
    it("não deve deixar a saúde ficar negativa", () => {
        const warrior = new Warrior_1.Warrior("Aragorn");
        warrior.takeDamage(999);
        expect(warrior.health).toBe(0);
    });
    it("deve aplicar multiplicador no takeDamage", () => {
        const warrior = new Warrior_1.Warrior("Aragorn");
        warrior.takeDamage(20, 2);
        expect(warrior.health).toBe(60);
    });
    it("deve lançar erro ao setar nome vazio", () => {
        const warrior = new Warrior_1.Warrior("Aragorn");
        expect(() => { warrior.name = ""; }).toThrow("Nome não deve ser vazio");
    });
    it("deve lançar erro ao setar level inválido", () => {
        const warrior = new Warrior_1.Warrior("Aragorn");
        expect(() => { warrior.level = 0; }).toThrow("Level deve ser maior que 0");
    });
});
//# sourceMappingURL=Character.test.js.map