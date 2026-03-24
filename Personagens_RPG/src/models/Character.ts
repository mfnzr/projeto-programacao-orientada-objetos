import { CharacterClass } from "../enums/CharacterClass";

export abstract class Character {
  public name: string;
  public level: number;
  public health: number;
  //aqui o tipo de characterClass só pode ser um dos valores do enum.
  public characterClass: CharacterClass;

  constructor(name: string, level: number, health: number, characterClass: CharacterClass) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.characterClass = characterClass;
  }

  //metodo abstrato, ou seja, sem implementação, apenas a assinatura
  //aqui é onde vou utilizar o polimorfismo, ou seja, utilizar o mesmo método para diferentes tipos de personagens, cada um com sua própria implementação
  public abstract attack(): void;

  takeDamage(damage: number): number {
    this.health -= damage;
    return damage;
  }
}
