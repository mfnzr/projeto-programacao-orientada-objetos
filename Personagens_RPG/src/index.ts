import { CharacterController } from "./controllers/CharacterController";
import { CharacterService } from "./controllers/Service";
import { CharacterView } from "./views/CharacterView";

const service = new CharacterService();
const controller = new CharacterController(service);
const view = new CharacterView();

view.setController(controller);
controller.setView(view);

controller.startCreation(); // controller coordena tudo
controller.startBattle();