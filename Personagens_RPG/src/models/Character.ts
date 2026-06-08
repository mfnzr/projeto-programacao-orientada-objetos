import { CharacterClass } from "../enums/CharacterClass";
import { IBattle } from "../Interfaces/IBattle";

export abstract class Character implements IBattle {
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
      throw new Error("Nome não deve ser vazio");
    }
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    if (value > 0) {
      this._level = value;
    } else {
      throw new Error("Level deve ser maior que 0");
    }
  }

  get health(): number {
    return this._health;
  }

  set health(value: number) {
    if (value < 0) this._health = 0;
    else this._health = value;
  }

  get class(): CharacterClass {
    return this._class;
  }

  public abstract attack(): number;

  takeDamage(damage: number, multiplier: number = 1): number {
    const total = damage * multiplier;
    this.health -= total;
    return total;
  }
}
