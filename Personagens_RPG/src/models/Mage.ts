import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "./Character";

export class Mage extends Character {

  constructor(name: string) {
    super(name, CharacterClass.MAGE);
  }

  attack(): number {
    return 20 + this.level;
  }
}
