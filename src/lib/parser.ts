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
