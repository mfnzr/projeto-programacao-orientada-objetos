"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("./controllers/Service");
const CharacterController_1 = require("./controllers/CharacterController");
const CharacterView_1 = require("./views/CharacterView");
const service = new Service_1.CharacterService();
const controller = new CharacterController_1.CharacterController(service);
const view = new CharacterView_1.CharacterView();
//injeto o controller na view
view.setController(controller);
//inicio o prompt
view.start();
//# sourceMappingURL=index.js.map