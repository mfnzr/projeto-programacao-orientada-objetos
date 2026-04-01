import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "./Character";

export class Mage extends Character {

  constructor(name: string) {
    super(name, CharacterClass.MAGE);
  }

  //aqui estou sobrescrevendo o método attack da classe Character, ou seja,
  //estou implementando a lógica específica para o ataque do Mago
  attack(): number {
    return 20 + this.level;
  }
}
