export declare abstract class Character {
    _name: string;
    _level: number;
    _health: number;
    constructor(name: string);
    get name(): string;
    set name(value: string);
    get level(): number;
    set level(value: number);
    get health(): number;
    set health(value: number);
    abstract attack(): void;
    takeDamage(damage: number): number;
}
//# sourceMappingURL=Character.d.ts.map