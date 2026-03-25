import { Character } from "../models/Character";
import { Warrior } from "../models/Warrior";
import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";
export declare class CharacterService {
    createWarrior(name: string): Warrior;
    createArcher(name: string): Archer;
    createMage(name: string): Mage;
    attack(character: Character): void;
    takeDamage(character: Character, damage: number): number;
}
//# sourceMappingURL=Service.d.ts.map