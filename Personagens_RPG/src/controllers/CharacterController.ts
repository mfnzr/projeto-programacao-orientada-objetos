import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "../models/Character";
import { CharacterView } from "../views/CharacterView";
import { CharacterService } from "./Service";

//COORDENA O FLUXO ENTRE A VIEW E O SERVICE

export class CharacterController {
  //o controller depende do service para criar personagens e realizar ações
  private service: CharacterService;
  private view!: CharacterView;

  //injeção de dependência - o service é injetado no controller, permitindo maior flexibilidade
  constructor(service: CharacterService) {
    this.service = service;
  }

  setView(view: CharacterView): void {
    this.view = view;
  }

  startCreation(): void {
    let creating = true;
    let count = 1;

    while (creating) {
      const { name, characterClass } = this.view.askCharacterData(count);
      this.createAndShowCharacter(name, characterClass);
      count++;

      if (count > 2) { // mínimo 2 personagens antes de perguntar
        const continuar = this.view.askContinue();
        if (!continuar) creating = false;
      }
    }

    const all = this.service.getAllCharacters();
    this.view.showAllCharacters(all);
  }


  //importa o método createAndShowCharacter para criar um personagem com base na classe escolhida e mostrar suas informações
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