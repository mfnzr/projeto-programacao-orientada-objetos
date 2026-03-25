export abstract class Character {
  public _name!: string; //get set
  public _level: number;
  public _health: number;

  constructor(name: string) {
    this._name = name;
    this._level = 1;
    this._health = 100;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.trim() !== "") {  
      this._name = value;
    }
    throw new Error("Name cannot be empty");
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    if (value > 0) {
      this._level = value;
    }
    throw new Error("Level must be greater than 0");
  }

  get health(): number {
    return this._health;
  }

  set health(value: number) {
    if (value < 0) this._health = 0; // não deixa vida negativa
    else this._health = value;
  }

  //metodo abstrato, ou seja, sem implementação, apenas a assinatura
  //aqui é onde vou utilizar o polimorfismo, ou seja, utilizar o mesmo método para diferentes tipos de personagens, cada um com sua própria implementação
  public abstract attack(): void;

  takeDamage(damage: number): number {
    this.health -= damage;
    return damage;
  }
}
