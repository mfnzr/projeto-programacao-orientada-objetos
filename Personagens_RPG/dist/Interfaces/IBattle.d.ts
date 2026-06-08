export interface IBattle {
    name: string;
    health: number;
    attack(): number;
    takeDamage(damage: number): number;
    takeDamage(damage: number, multiplier: number): number;
}
//# sourceMappingURL=IBattle.d.ts.map