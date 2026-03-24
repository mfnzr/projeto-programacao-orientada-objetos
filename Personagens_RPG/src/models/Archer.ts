import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "./Character";

export class Archer extends Character {

  constructor(name: string, level: number, health: number) {
    super(name, level, health, CharacterClass.ARCHER);
  }

  //aqui estou sobrescrevendo o método attack da classe Character, ou seja,
  //estou implementando a lógica específica para o ataque do Arqueiro
  attack(): number {
    return 10 + this.level * 3
  }
}
