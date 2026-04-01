import { CharacterClass } from "../enums/CharacterClass";
export declare abstract class Character {
    _name: string;
    _level: number;
    _health: number;
    _class: CharacterClass;
    constructor(name: string, characterClass: CharacterClass);
    get name(): string;
    set name(value: string);
    get level(): number;
    set level(value: number);
    get health(): number;
    set health(value: number);
    get class(): CharacterClass;
    abstract attack(): void;
    takeDamage(damage: number): number;
}
//# sourceMappingURL=Character.d.ts.map