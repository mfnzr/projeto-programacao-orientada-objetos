import { CharacterClass } from "../enums/CharacterClass";
import { CharacterNotFoundException, EmptyNameException, InvalidOptionException } from "../exceptions/Exceptions";
import { Character } from "../models/Character";
import { CharacterView } from "../views/CharacterView";
import { CharacterService } from "./Service";

export class CharacterController {
  private service: CharacterService;
  private view!: CharacterView;

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
      try {
        const { name, characterClass } = this.view.askCharacterData(count);
        this.createAndShowCharacter(name, characterClass);
        count++;

        if (count > 2) {
          const continuar = this.view.askContinue();
          if (!continuar) creating = false;
        }
      } catch (error) {
        if (error instanceof InvalidOptionException) {
          console.log(`Erro: ${error.message}`);
        } else if (error instanceof EmptyNameException) {
          console.log(`Erro: ${error.message}`);
        } else {
          throw error;
        }
      }
    }

    const all = this.service.Characters();
    this.view.showAllCharacters(all);
  }


  createAndShowCharacter(name: string, characterClass: CharacterClass): Character {
    switch (characterClass) {
      case CharacterClass.WARRIOR:
        return this.service.createWarrior(name);
      case CharacterClass.ARCHER:
        return this.service.createArcher(name);
      case CharacterClass.MAGE:
        return this.service.createMage(name);
    }
  }

  attack(attackerIndex: number, defenderIndex: number, critical: boolean): { attacker: Character, defender: Character, damage: number } {
    const characters = this.service.Characters();
    const attacker = characters[attackerIndex];
    const defender = characters[defenderIndex];

    if (!attacker || !defender) throw new CharacterNotFoundException();

    const damage = this.service.attackCharacter(attacker, defender, critical);
    return { attacker, defender, damage };
  }

  startBattle(): void {
    const entities = this.service.Characters();
    let validChoice = false;

    while (!validChoice) {
      try {
        const { attackerIndex, defenderIndex, critical } = this.view.askBattle(entities);

        if (attackerIndex === defenderIndex) {
          console.log("Uma entidade não pode atacar a si mesma!");
          continue;
        }

        const { attacker, defender, damage } = this.attack(attackerIndex, defenderIndex, critical);
        this.view.showAttackResult(attacker, defender, damage, critical);
        validChoice = true;

      } catch (error) {
        if (error instanceof CharacterNotFoundException) {
          console.log(`Erro: ${error.message} Tente novamente.\n`);
        } else {
          throw error;
        }
      }
    }
  }
}