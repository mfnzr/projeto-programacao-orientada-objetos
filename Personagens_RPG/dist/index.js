"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterController_1 = require("./controllers/CharacterController");
const Service_1 = require("./controllers/Service");
const service = new Service_1.CharacterService();
const controller = new CharacterController_1.CharacterController(service);
controller.createAndShowWarrior("Aragorn");
controller.createAndShowArcher("Legolas");
controller.createAndShowMage("Gandalf");
//# sourceMappingURL=index.js.map