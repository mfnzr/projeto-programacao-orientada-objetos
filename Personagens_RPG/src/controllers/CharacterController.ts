import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "../models/Character";
import { CharacterService } from "./Service";

export class CharacterController {
  //o controller depende do service para criar personagens e realizar ações
  private service: CharacterService;

  //injeção de dependência - o service é injetado no controller, permitindo maior flexibilidade
  constructor(service: CharacterService) {
    this.service = service;
  }

  //importa o método createAndShowCharacter para criar um personagem com base na classe escolhida e mostrar suas informações
  //a classe é definida como um enum, o que facilita a escolha e evita erros de digitação
  //o método createAndShowCharacter é genérico, ou seja, pode criar qualquer tipo de personagem com base na classe escolhida, utilizando o polimorfismo para chamar o método attack específico de cada classe
  createAndShowCharacter(name: string, characterClass: CharacterClass): Character {
    switch (characterClass) {
      case CharacterClass.WARRIOR:
      //aqui estou utilizando o service para criar um personagem do tipo Guerreiro
        return this.service.createWarrior(name);
      case CharacterClass.ARCHER:
        return this.service.createArcher(name);
      case CharacterClass.MAGE:
        return this.service.createMage(name);
    }
  }
}