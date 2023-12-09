import u from "./gitz.json"
import u2 from "./maggotkin.json"
import o from "./gitzOptions.json"
export interface Unit {
  faction: string,
  type: string,
  name: string,
  movement: string,
  save: string,
  bravery: string,
  wounds: string,
  missileWeapons?: Weapon[],
  meleeWeapons?: Weapon[],
  standard?: string,
  musician?: string,
  champion?: string,
  abilities?: Ability[],
  damageTable?: DamageTable
}

interface DamageTable {
  header: string[],
  rows: string[][]
}
interface Weapon {
  name: string,
  range: string,
  attacks: string,
  toHit: string,
  toWound: string,
  rend: string,
  damage: string
}

interface Ability {
  name: string,
  description: string
  type?: string
}

export const options: Ability[] = o;
export const units: Unit[] = [...u, ...u2];