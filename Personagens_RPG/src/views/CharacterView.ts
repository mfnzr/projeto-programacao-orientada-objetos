import promptSync from "prompt-sync";
import { CharacterController } from "../controllers/CharacterController";
import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "../models/Character";

export class CharacterView {
  private prompt = promptSync();
  private controller!: CharacterController;

  setController(controller: CharacterController): void {
    this.controller = controller;
  }

  start(): void {
    console.log("=== Criação de Personagem ===\n");

    console.log("Escolha a classe:");
    console.log("1 - Warrior");
    console.log("2 - Archer");
    console.log("3 - Mage\n");

    const classChoice = this.prompt("Digite o número da classe desejada: ");

    const classMap: Record<string, CharacterClass> = {
      "1": CharacterClass.WARRIOR,
      "2": CharacterClass.ARCHER,
      "3": CharacterClass.MAGE,
    };

    const className = classMap[classChoice];

    if (!className) {
      console.log("Opção inválida!");
      return;
    }

    const name = this.prompt("Digite o nome do personagem: ");

    if (!name || name.trim() === "") {
      console.log("Nome não pode ser vazio!");
      return;
    }

    const character = this.controller.createAndShowCharacter(name, className);
    this.showCharacterInfo(character); // chama com this.
  }

  showCharacterInfo(character: Character): void {
    console.log(`
      === Personagem Criado! ===
      Nome:   ${character.name}
      Classe: ${character.class}
      Level:  ${character.level}
      Saúde:  ${character.health}
      Ataque: ${character.attack()}
    `);
  }
}