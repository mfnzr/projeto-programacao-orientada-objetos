import { Character } from "../models/Character";
import { Warrior } from "../models/Warrior";
import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";
export declare class CharacterService {
    private characters;
    createWarrior(name: string): Warrior;
    createArcher(name: string): Archer;
    createMage(name: string): Mage;
    getAllCharacters(): Character[];
    attack(character: Character): void;
    attackCharacter(attacker: Character, defender: Character, critical: boolean): number;
    takeDamage(character: Character, damage: number): number;
}
//# sourceMappingURL=Service.d.ts.map