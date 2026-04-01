import { CharacterController } from "./controllers/CharacterController";
import { CharacterService } from "./controllers/Service";

const service = new CharacterService();
const controller = new CharacterController(service);

controller.createAndShowWarrior("Aragorn");
controller.createAndShowArcher("Legolas");
controller.createAndShowMage("Gandalf");
