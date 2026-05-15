"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterController_1 = require("./controllers/CharacterController");
const Service_1 = require("./controllers/Service");
const CharacterView_1 = require("./views/CharacterView");
const service = new Service_1.CharacterService();
const controller = new CharacterController_1.CharacterController(service);
const view = new CharacterView_1.CharacterView();
view.setController(controller);
controller.setView(view);
controller.startCreation(); // controller coordena tudo
controller.startBattle();
//# sourceMappingURL=index.js.map