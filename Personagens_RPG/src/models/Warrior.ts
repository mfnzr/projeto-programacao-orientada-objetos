import { Character } from './Character';
export class Warrior extends Character {

  constructor(name: string) {
    super(name);
  }
  //aqui estou sobrescrevendo o método attack da classe Character, ou seja,
  //estou implementando a lógica específica para o ataque do Guerreiro
  //polimorfismo - usando o mesmo para vários tipos de personagens
  //sobrescrita de método - cada classe tem sua própria implementação do método attack
  attack(): number {
    return 15 + this.level * 2
  }
}
