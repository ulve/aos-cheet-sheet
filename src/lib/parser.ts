const text2 = `- Army Faction: Maggotkin of Nurgle
- Subfaction: Befouling Host
- Grand Strategy: Corrupt Arcane Nexus
- Triumph: Bloodthirsty
LEADERS
Great Unclean One (430)
- General
- Command Traits: Nurgling Infestation
- Doomsday Bell and Plague Flail
- Artefacts of Power: The Witherstave
- Spells: Fleshy Abundance
The Glottkin (580)
- Spells: Rancid Visitations
Orghotts Daemonspew (320)
Morbidex Twiceborn (290)
BATTLELINE
Plaguebearers (120)
- Icon Bearer
- Piper
- Plagueridden
Plaguebearers (120)
- Plagueridden
- Icon Bearer
- Piper
Plaguebearers (120)
- Plagueridden
- Icon Bearer
- Piper
TERRAIN
1 x Feculent Gnarlmaw (0)
1 x Feculent Gnarlmaw (0)
TOTAL POINTS: 1980/2000
Created with Warhammer Age of Sigmar: The App`;

const text = `- Army Faction: Gloomspite Gitz
- Subfaction: Jaws of Mork
- Grand Strategy: A Scheme for Every Occasion
- Triumph: Indomitable
LEADERS
Fungoid Cave-Shaman (110)
- Spells: Squig Lure
Loonboss on Giant Cave Squig (130)
- General
- Command Traits: Squig Whisperer
- Moon-cutta
- Artefacts of Power: Loonstone Teefcaps
Squigboss (110)
BATTLELINE
Squig Hoppers (190)
- Squig Hopper Boss
Moonclan Shootas (120)
- Bad Moon Icon Bearer
- Gong Basher
- Moonclan Boss
- 3 Barbed Nets
Squig Herd (140)
OTHER
Rockgut Troggoths (170)
TERRAIN
1 x Bad Moon Loonshrine (0)
TOTAL POINTS: 970/1000
Created with Warhammer Age of Sigmar: The App`;
interface U {
    name: string;
    options: string[];
}

interface Meta {
    faction: string;
    subfaction: string;
    grandStrategy: string;
}
export interface Parsed {
    meta: Meta;
    leaders: U[];
    battleline: U[];
    terrain: U[];
    other: U[];
}

function parseMeta(s: string): Meta {
    let m: Meta = { faction: 'unknown', subfaction: 'unknown', grandStrategy: 'unknown' };
    s.split('\n').forEach(line => {
        // meta
        if (line.startsWith('- Army Faction:')) {
            m.faction = line.split(':')[1].trim();
        }
        if (line.startsWith('- Subfaction:')) {
            m.subfaction = line.split(':')[1].trim();
        }
        if (line.startsWith('- Grand Strategy:')) {
            m.grandStrategy = line.split(':')[1].trim();
        }
    });

    return m;
}

function isHeader(s: string): boolean {
    return s.startsWith('TOTAL') || s.startsWith('BATTLELINE') || s.startsWith('LEADER') || s.startsWith('TERRAIN') || s.startsWith('OTHER')
}

function parseSection(s: string, section: string): U[] {
    let inSection = false;
    let current: U | null;
    let retVal: U[] = [];

    s.split('\n').forEach(line => {
        if (inSection) {
            // new leader
            if (!line.startsWith('-') && !isHeader(line)) {
                if (current)
                    retVal.push(current);
                current = { name: line.split('(')[0].trim(), options: [] };
            }

            if (line.startsWith('-')) {
                line = line.trim().substring(1);
                line = line.replace('Artefacts of Power:', '')
                line = line.replace('Command Traits:', '')
                if (current)
                    current.options.push(line.trim());
            }
        }
        if (line.startsWith(section)) {
            inSection = true;
        } else if (isHeader(line)) {
            if (current) {
                retVal.push(current);
                current = null;
            }
            inSection = false;
        }
    });
    return retVal;
}

export function parse(s: string): Parsed {
    let m = parseMeta(s);
    let leaders = parseSection(s, "LEADERS");
    let battleline = parseSection(s, "BATTLELINE");
    let other = parseSection(s, "OTHER");
    let terrain = parseSection(s, "TERRAIN");

    return {
        meta: m ?? {},
        leaders: leaders ?? [],
        battleline: battleline ?? [],
        other: other ?? [],
        terrain: terrain ?? []
    };
}