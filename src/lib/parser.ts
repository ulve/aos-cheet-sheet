const cos = `- Army Faction: Cities of Sigmar
	 - Subfaction: Misthåvn
LEADERS
Alchemite Warforger (110)
Freeguild Cavalier-Marshal (120)
	 - General
Freeguild Marshal and Relic Envoy (90)
	 - Heirloom Warhammer
Fusil-Major on Ogor Warhulk (150)
Galen Ven Denst (160)
Haskel Hexbane (180)
Pontifex Zenestra (180)
Tahlia Vedra (340)
BATTLELINE
Freeguild Cavaliers (180)
	 - Arch-Knight
	 - Cavalier Herald
	 - Arch-Knight’s Blade
Freeguild Steelhelms (100)
	 - Sergeant-at-Arms
	 - Battle Priest
	 - Steelhelm Herald
ARTILLERY
Ironweld Great Cannon (150)
OTHER
Doralia ven Denst (160)
Freeguild Command Corps (170)
Freeguild Fusiliers (170)
	 - Fusilier Herald
	 - Fusil-Sergeant
Hexbane’s Hunters (180)
TOTAL POINTS: 2100/2000
Created with Warhammer Age of Sigmar: The App`;

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
	artillery: U[];
}

function parseMeta(s: string): Meta {
	const m: Meta = { faction: 'unknown', subfaction: 'unknown', grandStrategy: 'unknown' };
	s.split('\n').forEach((line) => {
		// meta
		if (line.trim().startsWith('- Army Faction:')) {
			m.faction = line.split(':')[1].trim();
		}

		if (line.trim().startsWith('- Subfaction:')) {
			m.subfaction = line.split(':')[1].trim();
		}

		if (line.trim().startsWith('- Grand Strategy:')) {
			m.grandStrategy = line.split(':')[1].trim();
		}
	});

	return m;
}

function isHeader(s: string): boolean {
	return (
		s.startsWith('TOTAL') ||
		s.startsWith('BATTLELINE') ||
		s.startsWith('LEADER') ||
		s.startsWith('TERRAIN') ||
		s.startsWith('OTHER') ||
		s.startsWith('ARTILLERY')
	);
}

function parseSection(s: string, section: string): U[] {
	let inSection = false;
	let current: U | null;
	const retVal: U[] = [];

	s.split('\n').forEach((line) => {
		if (inSection) {
			line = line.trim();
			// new leader
			if (!line.startsWith('-') && !isHeader(line)) {
				if (current) retVal.push(current);
				current = { name: line.split('(')[0].trim(), options: [] };
			}

			if (line.startsWith('-')) {
				line = line.trim().substring(1);
				line = line.replace('Artefacts of Power:', '');
				line = line.replace('Command Traits:', '');
				line = line.replace('Spells:', '');
				if (current) current.options.push(line.trim());
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
	const m = parseMeta(s);
	const leaders = parseSection(s, 'LEADERS');
	const battleline = parseSection(s, 'BATTLELINE');
	const other = parseSection(s, 'OTHER');
	const terrain = parseSection(s, 'TERRAIN');
	const artillery = parseSection(s, 'ARTILLERY');

	return {
		meta: m ?? {},
		leaders: leaders ?? [],
		battleline: battleline ?? [],
		other: other ?? [],
		terrain: terrain ?? [],
		artillery: artillery ?? []
	};
}
