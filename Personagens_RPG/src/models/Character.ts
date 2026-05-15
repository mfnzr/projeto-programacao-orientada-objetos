import { CharacterClass } from "../enums/CharacterClass";

export abstract class Character {
  public _name!: string; //get set
  public _level: number;
  public _health: number;
  public _class: CharacterClass

  constructor(name: string, characterClass: CharacterClass) {
    this._name = name;
    this._level = 1;
    this._health = 100;
    this._class = characterClass;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.trim() !== "") {
      this._name = value;
    } else {
      throw new Error("Name cannot be empty");
    }
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    if (value > 0) {
      this._level = value;
    } else {
      throw new Error("Level must be greater than 0");
    }
  }

  get health(): number {
    return this._health;
  }

  set health(value: number) {
    if (value < 0) this._health = 0; // não deixa vida negativa
    else this._health = value;
  }

  get class(): CharacterClass {
    return this._class;
  }

  //metodo abstrato, ou seja, sem implementação, apenas a assinatura
  //aqui é onde vou utilizar o polimorfismo, ou seja, utilizar o mesmo método para diferentes tipos de personagens, cada um com sua própria implementação
  public abstract attack(): number;

  //assinaturas da sobrecarga
  takeDamage(damage: number): number;
  takeDamage(damage: number, multiplier: number): number;

  takeDamage(damage: number, multiplier: number = 1): number {
    const total = damage * multiplier;
    this.health -= total;
    return total;
  }
}
