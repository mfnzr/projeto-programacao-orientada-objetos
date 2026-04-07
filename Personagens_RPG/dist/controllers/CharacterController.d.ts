import { CharacterClass } from "../enums/CharacterClass";
import { Character } from "../models/Character";
import { CharacterService } from "./Service";
export declare class CharacterController {
    private service;
    constructor(service: CharacterService);
    createAndShowCharacter(name: string, characterClass: CharacterClass): Character;
}
//# sourceMappingURL=CharacterController.d.ts.map