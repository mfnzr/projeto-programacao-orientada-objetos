import promptSync from "prompt-sync";
import { CharacterController } from "../controllers/CharacterController";
import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "../models/Character";

//INTERAÇÕES COM O USUÁRIO - COLETA DADOS E EXIBE INFORMAÇÕES

export class CharacterView {
  private prompt = promptSync();
  private controller!: CharacterController;

  setController(controller: CharacterController): void {
    this.controller = controller;
  }

  askCharacterData(number: number): { name: string; characterClass: CharacterClass } {
    console.log(`\n=== Personagem nº ${number} ===\n`);
    console.log("1 - Warrior / 2 - Archer / 3 - Mage\n");

    const classMap: Record<string, CharacterClass> = {
      "1": CharacterClass.WARRIOR,
      "2": CharacterClass.ARCHER,
      "3": CharacterClass.MAGE,
    };

    const classChoice = this.prompt("Classe: ");
    const characterClass = classMap[classChoice];

    if (!characterClass) throw new Error("Opção inválida!");

    const name = this.prompt("Nome: ");
    if (!name || name.trim() === "") throw new Error("Nome não pode ser vazio!");

    return { name, characterClass }; //retorna os dados
  }

  askContinue(): boolean {
    const answer = this.prompt("Criar outro personagem? (s/n): ");
    return answer.toLowerCase() === "s";
  }

  showAllCharacters(characters: Character[]): void {
    console.log("\n=== Personagens Criados ===\n");
    characters.forEach((character, index) => {
      console.log(`--- Personagem ${index + 1} ---`);
      this.showCharacterInfo(character);
    });
  }

  showCharacterInfo(character: Character): void {
    console.log(`
      Nome:   ${character.name}
      Classe: ${character.class}
      Level:  ${character.level}
      Saúde:  ${character.health}
    `);
  }
}