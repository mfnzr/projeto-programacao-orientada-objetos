import { Character } from "../models/Character";
import { Warrior } from "../models/Warrior";
import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";
import { IBattle } from "../Interfaces/IBattle";
export class CharacterService {
 private characters: Character[] = [];
  createWarrior(name: string): Warrior {
    const warrior = new Warrior(name);
    this.characters.push(warrior); 
    return warrior;
  }

  createArcher(name: string): Archer {
    const archer = new Archer(name);
    this.characters.push(archer);
    return archer;
  }

  createMage(name: string): Mage {
    const mage = new Mage(name);
    this.characters.push(mage);
    return mage;
  }

  Characters(): Character[] {
    return this.characters;
  }

  attack(character: Character): void {
    character.attack();
  }

  attackCharacter(attacker: IBattle, defender: IBattle, critical: boolean = false): number {
    const damage = attacker.attack(); 
    const multiplier = critical ? 2 : 1 
    defender.takeDamage(damage, multiplier); 
    return damage * multiplier;            
  }

  takeDamage(character: Character, damage: number): number {
    return character.takeDamage(damage);
  }
}