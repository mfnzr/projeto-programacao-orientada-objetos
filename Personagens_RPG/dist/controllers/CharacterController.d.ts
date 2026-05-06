import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "../models/Character";
import { CharacterView } from "../views/CharacterView";
import { CharacterService } from "./Service";
export declare class CharacterController {
    private service;
    private view;
    constructor(service: CharacterService);
    setView(view: CharacterView): void;
    startCreation(): void;
    createAndShowCharacter(name: string, characterClass: CharacterClass): Character;
}
//# sourceMappingURL=CharacterController.d.ts.map