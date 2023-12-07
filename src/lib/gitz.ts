export interface Unit {
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

// Battleline
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

// Other
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

const dankhold: Unit = {
  name: "Dankhold Troggoths",
  movement: '6"',
  save: '4+',
  bravery: '6',
  wounds: '10',
  meleeWeapons: [
    {
      name: 'Colossal Boulder Club',
      range: '2"',
      attacks: '4',
      toHit: '3+',
      toWound: '2+',
      rend: '-2',
      damage: 'D3+3'
    }
  ],
  abilities: [
    { name: 'Regeneration', description: 'Hero phase heal D3 W. ' },
    { name: 'Magical Resistance', description: '4+ spell save. ' },
    { name: 'Squiggly-beast Followers', description: 'Start of combat, all enemy units within 3" take mortal on W+. ' },
    { name: 'Crushing Grip', description: 'End of combat 1" slay model on W+. ' }
  ]
}

const fellwater: Unit = {
  name: "Fellwater Troggoths",
  movement: '6"',
  save: '4+',
  bravery: '5',
  wounds: '4',
  missileWeapons:
    [
      {
        name: 'Noxious Vomit',
        range: '6"',
        attacks: '1',
        toHit: '2+',
        toWound: '3+',
        rend: '-2',
        damage: 'D3'
      }
    ],
  meleeWeapons: [
    {
      name: 'Spiked Club',
      range: '2"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    }
  ],
  abilities: [
    { name: 'Regeneration', description: 'Hero phase heal D3 W. ' },
    { name: 'Terrible Stench', description: '-1 to hit within 3". ' },
    { name: 'Noxious Vomit', description: 'If wounded by vomit -1 to save and no posivite modifiers to my next hero phase. ' },

  ]
}

const rockguts: Unit = {
  name: "Rockgut Troggoths",
  movement: '6"',
  save: '4+',
  bravery: '5',
  wounds: '4',
  missileWeapons:
    [
      {
        name: 'Throwin’ Boulders',
        range: '9"',
        attacks: '1',
        toHit: '-',
        toWound: '-',
        rend: '-',
        damage: '-'
      }
    ],
  meleeWeapons: [
    {
      name: 'Massive Stone Maul',
      range: '2"',
      attacks: '2',
      toHit: '3+',
      toWound: '3+',
      rend: '-2',
      damage: '3'
    }
  ],
  abilities: [
    { name: 'Regeneration', description: 'Hero phase heal D3 W. ' },
    { name: 'Stony Skin', description: '5+ ward. ' },
    { name: 'Throwin’ Boulders', description: '4+ MW 3+ if 5 or more models 3+. ' },

  ]
}
const squigHerd: Unit = {
  name: "Squig Herd",
  movement: 'D6+5"',
  save: '6+',
  bravery: '3',
  wounds: '2',
  meleeWeapons: [
    {
      name: 'Fang-filled Gob',
      range: '1"',
      attacks: '3',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Squig Prodder',
      range: '1"',
      attacks: '2',
      toHit: '5+',
      toWound: '5+',
      rend: '-',
      damage: '1'
    }
  ],
  abilities: [
    { name: 'Herding Squigs', description: 'Hero phase 2+ for each herder returns D3 squigs. 1 killed. ' },
    { name: 'Squigs Gone Wild', description: 'Each squig that flee on 3+ deals 1MW on enemy unit within 9". ' },
  ]
}

// Heroes
const troggboss: Unit = {
  name: "Dankhold Troggboss",
  movement: '6"',
  save: '4+',
  bravery: '7',
  wounds: '12',
  meleeWeapons: [
    {
      name: 'Boulder Club',
      range: '2"',
      attacks: '4',
      toHit: '3+',
      toWound: '3+',
      rend: '-2',
      damage: 'D6'
    }
  ],
  abilities: [
    { name: 'Regeneration', description: 'Hero phase heal D6 W. ' },
    { name: 'Magical Resistance', description: '4+ spell save. ' },
    { name: 'Squiggly-beast Followers', description: 'Start of combat, all enemy units within 3" take mortal on W+. ' },
    { name: 'Crushing Grip', description: 'End of combat 1" slay model on W+. ' }
  ]

}

const fungoid: Unit = {
  name: "Fungoid Cave-Shaman",
  movement: '5"',
  save: '6+',
  bravery: '5',
  wounds: '5',
  meleeWeapons: [
    {
      name: 'Moon-sickle',
      range: '2"',
      attacks: '3',
      toHit: '3+',
      toWound: '4+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Vicious Teeth',
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    }
  ],
  abilities: [
    { name: 'Wizard', description: '1 spell 1 unbind. ' },
    { name: 'Mouthpiece of Mork', description: '4+ extra command. ' },
    { name: 'Deffcap Mushroom', description: 'Once per battle extra spell from Lore of the moonclan. ' },
    { name: 'Spore Squig', description: 'Invisible over 12" ' },
    { name: 'Spore Maws', description: 'Spell. CV7 range 6" All enemy nits within suffers D6MW ' },
  ]
}

const loonbossOnGiantCaveSquig: Unit = {
  name: "Loonboss on Giant Cave Squig",
  movement: 'D6+7"',
  save: '4+',
  bravery: '6',
  wounds: '8',
  meleeWeapons: [
    {
      name: 'Moon-cutta',
      range: '1"',
      attacks: '5',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Moonclan Stabba',
      range: '2"',
      attacks: '4',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },

    {
      name: 'Massive Fang-filled Gob',
      range: '1"',
      attacks: '4',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: 'D3'
    }
  ],
  abilities: [
    { name: 'FLY', description: 'This unit can fly. ' },
    { name: 'Moonclan Stabba', description: '+1 Dam -1 Rnd on charge. ' },
    { name: 'Let’s Get Bouncin’!', description: 'After fight a unit wholly within 12" and within 3" of an enemy can activate. ' },
  ]
}

const squigboss: Unit = {
  name: "Squigboss",
  movement: '5"',
  save: '6+',
  bravery: '5',
  wounds: '4',
  meleeWeapons: [
    {
      name: 'Squig-krook',
      range: '2"',
      attacks: '3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: '2'
    },
    {
      name: 'Fang-filled Gob',
      range: '1"',
      attacks: '3',
      toHit: '4+',
      toWound: '3+',
      rend: '-1',
      damage: '1'
    }
  ],
  abilities: [
    { name: 'Mycophile’s Pouch', description: 'Hero phase. one friendly squig unit within 3", +3 Mov/6 extra MW/+1A. ' },
    { name: 'Release Da Squigs', description: 'Each friendly squig herd wholly within 12" and have not moved can do a normal move. ' },
  ]
}

// Artifacts
const loonstoneTeefcaps: Ability = {
  name: "Loonstone Teefcaps",
  description: "-1 Rnd. "
}

// Command Traits
const squigWhisperer: Ability = {
  name: "Squig Whisperer",
  description: "+1 hit +1 wnd for this general's mount. "
}

export const artifacts: Ability[] = [
  loonstoneTeefcaps
]

export const commandTraits: Ability[] = [
  squigWhisperer
]

export const battleLine: Unit[] = [
  shoota,
  stabba,
  hopper,
]

export const other: Unit[] = [
  boing,
  dankhold,
  fellwater,
  squigHerd,
  rockguts,
]

export const leaders: Unit[] = [
  troggboss,
  fungoid,
  loonbossOnGiantCaveSquig,
  squigboss,
]