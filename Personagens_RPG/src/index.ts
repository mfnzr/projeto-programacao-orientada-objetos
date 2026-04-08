import { CharacterService } from "./controllers/Service";
import { CharacterController } from "./controllers/CharacterController";
import { CharacterView } from "./views/CharacterView";

const service = new CharacterService();
const controller = new CharacterController(service);
const view = new CharacterView();

//injeto o controller na view
view.setController(controller);
//inicio o prompt
view.start();