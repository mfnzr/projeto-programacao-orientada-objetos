import { Character } from "../models/Character";
import { Warrior } from "../models/Warrior";
import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";

export class CharacterService {

  createWarrior(name: string): Warrior {
    return new Warrior(name);
  }

  createArcher(name: string): Archer {
    return new Archer(name);
  }

  createMage(name: string): Mage {
    return new Mage(name);
  }

  attack(character: Character): void {
    character.attack();
  }

  takeDamage(character: Character, damage: number): number {
    return character.takeDamage(damage);
  }
}