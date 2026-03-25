import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";
import { Warrior } from "../models/Warrior";
import { CharacterService } from "./Service";

export class CharacterController {
  //o controller depende do service para criar personagens e realizar ações, seguindo o princípio de separação de responsabilidades
  private service: CharacterService;

  constructor() {
    this.service = new CharacterService();
  }

  createAndShowWarrior(name: string): Warrior {
    const warrior = this.service.createWarrior(name);
    return warrior;
  }

  createAndShowArcher(name: string): Archer { 
    const archer = this.service.createArcher(name);
    return archer;
  }

  createAndShowMage(name: string): Mage {
    const mage = this.service.createMage(name);
    return mage;
  }
}