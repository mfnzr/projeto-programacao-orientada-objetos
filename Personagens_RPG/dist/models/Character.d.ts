import { CharacterClass } from "../enums/CharacterClass";
export declare abstract class Character {
    name: string;
    level: number;
    health: number;
    characterClass: CharacterClass;
    constructor(name: string, level: number, health: number, characterClass: CharacterClass);
    abstract attack(): void;
    takeDamage(damage: number): number;
}
//# sourceMappingURL=Character.d.ts.map