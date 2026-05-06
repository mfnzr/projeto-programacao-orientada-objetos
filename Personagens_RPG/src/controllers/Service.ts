import { Character } from "../models/Character";
import { Warrior } from "../models/Warrior";
import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";


//REGRAS DE NEGOCIO - CRIA OS PERSONAGENS E REALIZA AÇÕES COMO ATAQUE E TOMAR DANO

export class CharacterService {
 private characters: Character[] = []; //armazena os personagens criados

  createWarrior(name: string): Warrior {
    const warrior = new Warrior(name);
    this.characters.push(warrior); //salva automaticamente na lista
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

  getAllCharacters(): Character[] {
    return this.characters;
  }

  attack(character: Character): void {
    character.attack();
  }

  takeDamage(character: Character, damage: number): number {
    return character.takeDamage(damage);
  }
}