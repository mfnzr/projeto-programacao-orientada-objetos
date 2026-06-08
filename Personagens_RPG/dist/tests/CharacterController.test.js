"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterController_1 = require("../controllers/CharacterController");
const Service_1 = require("../controllers/Service");
const CharacterClass_1 = require("../enums/CharacterClass");
describe("CharacterController", () => {
    let service;
    let controller;
    beforeEach(() => {
        service = new Service_1.CharacterService();
        controller = new CharacterController_1.CharacterController(service);
    });
    it("deve criar um Warrior via controller", () => {
        controller.createAndShowCharacter("Aragorn", CharacterClass_1.CharacterClass.WARRIOR);
        expect(service.Characters()).toHaveLength(1);
    });
    it("deve criar um Archer via controller", () => {
        controller.createAndShowCharacter("Legolas", CharacterClass_1.CharacterClass.ARCHER);
        const archer = service.Characters()[0];
        expect(archer).toBeDefined();
        expect(archer.attack()).toBe(13); // 10 + 1 * 3
    });
    it("deve realizar ataque entre dois personagens", () => {
        controller.createAndShowCharacter("Aragorn", CharacterClass_1.CharacterClass.WARRIOR);
        controller.createAndShowCharacter("Legolas", CharacterClass_1.CharacterClass.ARCHER);
        const { defender, damage } = controller.attack(0, 1, false);
        expect(defender.health).toBe(100 - damage);
    });
});
//# sourceMappingURL=CharacterController.test.js.map