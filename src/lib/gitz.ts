interface Unit {
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
}

const shoota: Unit = {
  name: "Moonclan Shootas",
  movement: '5"',
  save: '6+',
  bravery: '4',
  wounds: '1',
  missileWeapons: [
    {
      name: 'Moonclan Bow',
      range: '20"',
      attacks: '1',
      toHit: '4+',
      toWound: '5+',
      rend: '-',
      damage: '1'
    }
  ],
  meleeWeapons: [
    {
      name: 'Slitta',
      range: '1"',
      attacks: '1',
      toHit: '5+',
      toWound: '5+',
      rend: '-',
      damage: '1'
    },
    {
      name: 'Barbed Net',
      range: '2"',
      attacks: '3',
      toHit: '4+',
      toWound: '5+',
      rend: '-',
      damage: '1'
    }
  ],
  champion: '+1A on bow. ',
  standard: '+1 Sv vs missile. ',
  musician: '+1 to run. ',
  abilities: [{ name: 'Netters', description: '-1 to hit for enemies within 1". ' }, { name: 'Loadsa Arrers', description: '+1A with bows if 10+ models. ' }]
}

const stabba: Unit = {
  name: "Moonclan Stabbas",
  movement: '5"',
  save: '6+',
  bravery: '4',
  wounds: '1',
  meleeWeapons: [
    {
      name: 'Stabba',
      range: '1"',
      attacks: '1',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    },
    {
      name: 'Pokin’ Spear',
      range: '2"',
      attacks: '1',
      toHit: '5+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    },
    {
      name: 'Barbed Net',
      range: '2"',
      attacks: '3',
      toHit: '4+',
      toWound: '5+',
      rend: '-',
      damage: '1'
    }
  ],
  champion: '+1A',
  standard: '+1 Sv vs missile. ',
  musician: '+1 to run. ',
  abilities: [{ name: 'Netters', description: '-1 to hit for enemies within 1". ' }, { name: 'Anarchic Hordes', description: '9" contest if 20+ models. ' }]
}

const hopper: Unit = {
  name: "Squig Hoppers",
  movement: 'D6+10"',
  save: '6+',
  bravery: '4',
  wounds: '2',
  meleeWeapons: [
    {
      name: 'Slitta',
      range: '1"',
      attacks: '1',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    },
    {
      name: 'Fang-filled Gob',
      range: '1"',
      attacks: '3',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
  ],
  champion: '+1A. ',
  abilities: [{ name: 'Fly', description: 'This unit can fly. ' }, { name: 'Boing! Boing! Boing!', description: 'normal, run, retreat 4+ mortal for each model passing over enemy. ' }]
}

const boing: Unit = {
  name: "Boingrot Bounderz",
  movement: 'D6+7"',
  save: '4+',
  bravery: '5',
  wounds: '2',
  meleeWeapons: [
    {
      name: 'Pokin’ Lance',
      range: '2"',
      attacks: '2',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Fang-filled Gob',
      range: '1"',
      attacks: '3',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
  ],
  champion: '+1A. ',
  abilities: [
    { name: 'Fly', description: 'This unit can fly. ' },
    { name: 'Boing! Smash!!', description: 'After charge 4+ mortal for each model in this unit. ' },
    { name: 'Lances of the Bounderz', description: 'Charge +1Dam -1Rnd. ' }
  ]
}
export const battleLine: Unit[] = [
  shoota,
  stabba,
  hopper,
  boing
]
