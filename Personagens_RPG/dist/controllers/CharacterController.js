"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
class CharacterController {
    //injeção de dependência - o service é injetado no controller, permitindo maior flexibilidade
    constructor(service) {
        this.service = service;
    }
    createAndShowWarrior(name) {
        const warrior = this.service.createWarrior(name);
        return warrior;
    }
    createAndShowArcher(name) {
        const archer = this.service.createArcher(name);
        return archer;
    }
    createAndShowMage(name) {
        const mage = this.service.createMage(name);
        return mage;
    }
}
exports.CharacterController = CharacterController;
//# sourceMappingURL=CharacterController.js.map