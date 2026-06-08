import { CharacterController } from "../controllers/CharacterController";
import { CharacterService } from "../controllers/Service";
import { CharacterClass } from "../enums/CharacterClass";

describe("CharacterController", () => {
  let service: CharacterService;
  let controller: CharacterController;

  beforeEach(() => {
    service = new CharacterService();
    controller = new CharacterController(service);
  });

  it("deve criar um Warrior via controller", () => {
    controller.createAndShowCharacter("Aragorn", CharacterClass.WARRIOR);
    expect(service.Characters()).toHaveLength(1);
  });

  it("deve criar um Archer via controller", () => {
    controller.createAndShowCharacter("Legolas", CharacterClass.ARCHER);
    const archer = service.Characters()[0];
    expect(archer).toBeDefined();
    expect(archer!.attack()).toBe(13); // 10 + 1 * 3
  });

  it("deve realizar ataque entre dois personagens", () => {
    controller.createAndShowCharacter("Aragorn", CharacterClass.WARRIOR);
    controller.createAndShowCharacter("Legolas", CharacterClass.ARCHER);
    const { defender, damage } = controller.attack(0, 1, false);
    expect(defender.health).toBe(100 - damage);
  });
});