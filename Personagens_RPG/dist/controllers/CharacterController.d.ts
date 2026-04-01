import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";
import { Warrior } from "../models/Warrior";
import { CharacterService } from "./Service";
export declare class CharacterController {
    private service;
    constructor(service: CharacterService);
    createAndShowWarrior(name: string): Warrior;
    createAndShowArcher(name: string): Archer;
    createAndShowMage(name: string): Mage;
}
//# sourceMappingURL=CharacterController.d.ts.map