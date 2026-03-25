"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const Service_1 = require("./Service");
class CharacterController {
    constructor() {
        this.service = new Service_1.CharacterService();
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