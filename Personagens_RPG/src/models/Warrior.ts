import { CharacterClass } from '../enums/CharacterClass';
import { Character } from './Character';
export class Warrior extends Character {

  constructor(name: string) {
    super(name, CharacterClass.WARRIOR);
  }
  public attack(): number {
    return 15 + this.level * 2
  }
}
