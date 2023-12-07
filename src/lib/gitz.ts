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
  type?: string
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

const sneakySnufflers: Unit = {
  name: "Sneaky Snufflers",
  movement: '5"',
  save: '6+',
  bravery: '4',
  wounds: '2',
  meleeWeapons: [
    {
      name: 'Loonfungus Sickle',
      range: '2"',
      attacks: '3',
      toHit: '4+',
      toWound: '4+',
      rend: '-1',
      damage: '1'
    },
    {
      name: 'Gnashers',
      range: '1"',
      attacks: '2',
      toHit: '4+',
      toWound: '4+',
      rend: '-',
      damage: '1'
    }
  ],
  abilities: [
    { name: 'Off Their ’Eads', description: '5+ ward. ' },
    { name: 'Looncap Mushrooms', description: 'Start of movement. Roll 3+ (2+ if in moon) unit wholly within 12" 5+ ward if 6+ +1A. ' },
  ]
}

const loonsmasha: Unit = {
  name: "Loonsmasha Fanatics",
  movement: '2D6"',
  save: '6+',
  bravery: '10',
  wounds: '1',
  meleeWeapons: [
    {
      name: 'Ball and Chain',
      range: '3"',
      attacks: 'D6',
      toHit: '4+',
      toWound: '3+',
      rend: '-2',
      damage: 'D3'
    },
  ],
  abilities: [
    { name: 'Release the Fanatics!', description: 'Start of charge setup withon 3". ' },
    { name: 'Whirling Death', description: 'Strike first. ' },
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

const loonboss: Unit = {
  name: "Loonboss",
  movement: '5"',
  save: '4+',
  bravery: '5',
  wounds: '5',
  meleeWeapons: [
    {
      name: 'Moon-slicer',
      range: '2"',
      attacks: '5',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: 'D3'
    },
  ],
  abilities: [
    { name: 'Dead Tricksy', description: '6+ ward. ' },
    { name: 'I’m Da Boss, Now Stab ’Em Good!', description: 'All-out attacks cause extra MW on 6 to wound. ' },
  ]
}

const madcap: Unit = {
  name: "Madcap Shaman",
  movement: '5"',
  save: '6+',
  bravery: '5',
  wounds: '4',
  meleeWeapons: [
    {
      name: 'Moon Staff',
      range: '2"',
      attacks: '1',
      toHit: '4+',
      toWound: '4+',
      rend: '-1',
      damage: 'D3'
    },
  ],
  abilities: [
    { name: 'WIZARD', description: '1 cast 1 unbind. ' },
    { name: 'Madcap Mushroom', description: 'Once per battle 1 extra spell. If roll double D3MW. ' },
    { name: 'Night Shroud', description: 'CV5 range 12" -1 hit by missile. ' },
  ]
}

const skragrott: Unit = {
  name: "Skragrott, the Loonking",
  movement: '5"',
  save: '5+',
  bravery: '6',
  wounds: '6',
  meleeWeapons: [
    {
      name: 'Da Moon Onna Stikk',
      range: '2"',
      attacks: '3',
      toHit: '3+',
      toWound: '3+',
      rend: '-1',
      damage: 'D3'
    },
  ],
  abilities: [
    { name: 'WIZARD', description: '2 cast 2 unbind. All spells. ' },
    { name: 'Babbling Wand', description: 'Once per turn issue command for free. ' },
    { name: 'Da Moon Onna Stikk', description: 'Moon aura 12". ' },
    { name: 'The Loonking’s Entreaty', description: 'Once per battle decide if the moon will stay. ' },
    { name: 'Fangz of da Bad Moon', description: 'CV3 range 24" roll dice equal to CV 3+ gives MW. ' },
  ]
}

// Artefacts
const loonstoneTeefcaps: Ability = {
  type: "artefact",
  name: "Loonstone Teefcaps",
  description: "-1 Rnd. "
}

const leeringGitshield: Ability = {
  type: "artefact",
  name: "Leering Gitshield",
  description: "1 on hit on this model causes attacker 1MW. If this unit is slain the killer gets -1 Hit until end of battle. "
}

const backstabbersBlade: Ability = {
  type: "artefact",
  name: "Backstabber’s Blade",
  description: "Once per battle after combar 2+ D6 MW that cannot be negated. "
}

const clammyCowl: Ability = {
  type: "artefact",
  name: "The Clammy Cowl",
  description: '-1 Hit against this unit. '
}

const moonfacedMommet: Ability = {
  type: "artefact",
  name: "Moonface Mommet",
  description: 'Start of combat pick enemy unit within 12" -1 save. '
}

const staffOfSneakyStealin: Ability = {
  type: "artefact",
  name: "Staff of Sneaky Stealin’",
  description: '+1 casting rolls and each unbind gives +1 extra. '
}

const headdressOfManyEyes: Ability = {
  type: "artefact",
  name: 'Headdress of Many Eyes',
  description: 'Only 5 and 6 hit this model. '
}

const nibblasIttyRing: Ability = {
  type: "artefact",
  name: "Nibbla’s ’Itty Ring",
  description: 'Once per battle roll 1 die to all casting. '
}

const totemOfTheSpiderGod: Ability = {
  type: "artefact",
  name: "Totem of the Spider God",
  description: 'All spiderfang units wholly within 12" add 1MW to venom on 6. '
}

const glowyHowzit: Ability = {
  type: "artefact",
  name: "Glowy Howzit",
  description: '4+ ward roll die end of every phase it worked on 1 stops working. '
}

const speakySkullFetish: Ability = {
  type: "artefact",
  name: "Speaky-skull Fetish",
  description: 'Start of my hero phase roll 3 dice on 6 extra command and can issue same command 2 times. '
}

const petGribbly: Ability = {
  type: "artefact",
  name: "Pet Gribbly",
  description: '+1W roll a die for each wound on 1 +1 hit and +1 wound rest of battle. '
}

// Command Traits
const squigWhisperer: Ability = {
  type: "commandTrait",
  name: "Squig Whisperer",
  description: "+1 hit +1 wnd for this general's mount. "
}

const clammyHand: Ability = {
  type: "commandTrait",
  name: "Clammy Hand",
  description: 'If within 12" of moonshrine use twice. '
}

const loonTouched: Ability = {
  type: "commandTrait",
  name: "Loon-touched",
  description: '1 additional spell if in moon. '
}

const fightAnotherDay: Ability = {
  type: "commandTrait",
  name: "Fight Another Day",
  description: 'After fight, move 2D6" more than 3" from enemies. '
}

const supaNasty: Ability = {
  type: "commandTrait",
  name: "Supa-nasty Venom",
  description: 'Double MW for this units venom. '
}

const alphaTrogg: Ability = {
  type: "commandTrait",
  name: "Alpha Trogg",
  description: '+2W on this unit and MONSTER keyword. '
}

const troggSmash: Ability = {
  type: "commandTrait",
  name: "Trogg Smash",
  description: 'Once per battle after combat all enemy units within 3" D3 MW on 2+. '
}

const loonskin: Ability = {
  type: "commandTrait",
  name: "Loonskin",
  description: 'Free endless spell and can cast it. '
}

// spells
const itchyNuisance: Ability = {
  type: "spell",
  name: "Itchy Nuisance",
  description: 'CV6 range 18" strike last. '
}

const nikkitNikkit: Ability = {
  type: "spell",
  name: "Nikkit! Nikkit!",
  description: 'CV8 range 12" D3MW 10+ loose artefact. '
}

const squigLure: Ability = {
  type: "spell",
  name: "Squig Lure",
  description: 'CV5 range 18" Reroll charge on squig unit. '
}

const theHandOfGork: Ability = {
  type: "spell",
  name: "The Hand of Gork",
  description: 'CV7 range 24" teleport 1 unit. '
}

const scuttlingTerrors: Ability = {
  type: "spell",
  name: "Scuttling Terrors",
  description: 'CV6 range 18" spider unit make normal move. '
}

const sneakyDistraction: Ability = {
  type: "spell",
  name: "Sneaky Distraction",
  description: 'CV7 range 12" -1 to hit. '
}

const curseOfTheSpiderGod: Ability = {
  type: "spell",
  name: "Curse of the Spider God",
  description: 'CV7 range 24" hit and save always fail on 1 and 2. '
}

export const options: Ability[] = [
  // Artefacts
  leeringGitshield,
  backstabbersBlade,
  clammyCowl,
  loonstoneTeefcaps,
  moonfacedMommet,
  staffOfSneakyStealin,

  // Command Traits
  clammyHand,
  loonTouched,
  fightAnotherDay,
  supaNasty,
  squigWhisperer,
  alphaTrogg,
  troggSmash,
  loonskin,
  headdressOfManyEyes,
  nibblasIttyRing,
  totemOfTheSpiderGod,
  glowyHowzit,
  speakySkullFetish,
  petGribbly,

  // spells
  itchyNuisance,
  nikkitNikkit,
  squigLure,
  theHandOfGork,
  scuttlingTerrors,
  sneakyDistraction,
  curseOfTheSpiderGod,
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
  sneakySnufflers,
  loonsmasha,
]

export const leaders: Unit[] = [
  troggboss,
  fungoid,
  loonbossOnGiantCaveSquig,
  squigboss,
  loonboss,
  madcap,
  skragrott,
]