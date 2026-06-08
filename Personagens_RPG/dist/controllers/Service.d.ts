import { Character } from "../models/Character";
import { Warrior } from "../models/Warrior";
import { Archer } from "../models/Archer";
import { Mage } from "../models/Mage";
import { IBattle } from "../Interfaces/IBattle";
export declare class CharacterService {
    private characters;
    createWarrior(name: string): Warrior;
    createArcher(name: string): Archer;
    createMage(name: string): Mage;
    Characters(): Character[];
    attack(character: Character): void;
    attackCharacter(attacker: IBattle, defender: IBattle, critical?: boolean): number;
    takeDamage(character: Character, damage: number): number;
}
//# sourceMappingURL=Service.d.ts.map