import { CharacterService } from "../controllers/Service";

describe("CharacterService", () => {
  let service: CharacterService;

  beforeEach(() => {
    service = new CharacterService();
  });

  it("deve criar um Warrior e salvar na lista", () => {
    service.createWarrior("Aragorn");
    expect(service.Characters()).toHaveLength(1);
  });

  it("deve criar múltiplos personagens e salvar todos", () => {
    service.createWarrior("Aragorn");
    service.createArcher("Legolas");
    service.createMage("Gandalf");
    expect(service.Characters()).toHaveLength(3);
  });

  it("deve calcular dano corretamente no attackCharacter", () => {
    const attacker = service.createWarrior("Aragorn");
    const defender = service.createArcher("Legolas");
    const damage = service.attackCharacter(attacker, defender);
    expect(defender.health).toBe(100 - damage);
  });

  it("deve dobrar o dano no ataque crítico", () => {
    const attacker = service.createWarrior("Aragorn");
    const defender = service.createArcher("Legolas");
    const normalDamage = attacker.attack();
    service.attackCharacter(attacker, defender, true);
    expect(defender.health).toBe(100 - normalDamage * 2);
  });
});