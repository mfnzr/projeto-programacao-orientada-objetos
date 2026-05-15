export interface IBattle {
  name: string;
  health: number;
  attack(): number;
  takeDamage(damage: number): number;                    // forma 1 — só o dano
  takeDamage(damage: number, multiplier: number): number; // forma 2 — dano + multiplicador
}