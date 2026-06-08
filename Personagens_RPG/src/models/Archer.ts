import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "./Character";

export class Archer extends Character {

  constructor(name: string) {
    super(name, CharacterClass.ARCHER);
  }

  attack(): number {
    return 10 + this.level * 3
  }
}
