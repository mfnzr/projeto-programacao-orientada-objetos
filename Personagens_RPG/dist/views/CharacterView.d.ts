import { CharacterController } from "../controllers/CharacterController";
import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "../models/Character";
export declare class CharacterView {
    private prompt;
    private controller;
    setController(controller: CharacterController): void;
    askCharacterData(number: number): {
        name: string;
        characterClass: CharacterClass;
    };
    askContinue(): boolean;
    showAllCharacters(characters: Character[]): void;
    showCharacterInfo(character: Character): void;
}
//# sourceMappingURL=CharacterView.d.ts.map