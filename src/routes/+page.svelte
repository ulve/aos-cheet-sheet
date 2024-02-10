<script lang="ts">
	import { units, type Unit, options } from '$lib/units';
	import { parse, type Parsed } from '$lib/parser';
	let debug = false;
	let text = ``;
	let parsedList: Parsed = {
		meta: {
			grandStrategy: '',
			faction: '',
			subfaction: ''
		},
		leaders: [],
		battleline: [],
		other: [],
		terrain: [],
		artillery: []
	};

	let u: Unit[] = [];
	function papa() {
		u = [];
		parsedList = parse(text);
		console.log(parsedList.meta);

		parsedList.leaders.forEach((leader) => {
			const h = units.find((h) => h.name === leader.name && h.faction === parsedList.meta.faction);
			if (h) {
				if (leader.options) {
					console.log('leader has options', leader.options);
					leader.options.forEach((option) => {
						const a = options.find((a) => a.name === option);
						if (a) {
							console.log('found artifact', a);
							h.abilities?.push(a);
						}
					});
				}
				u.push(h);
			}
		});

		parsedList.battleline.forEach((bl) => {
			const h = units.find((h) => h.name === bl.name && h.faction === parsedList.meta.faction);
			if (h) {
				u.push(h);
			}
		});

		parsedList.other.forEach((o) => {
			const h = units.find((h) => h.name === o.name && h.faction === parsedList.meta.faction);
			if (h) {
				u.push(h);
			}
		});

		parsedList.artillery.forEach((o) => {
			const h = units.find((h) => h.name === o.name && h.faction === parsedList.meta.faction);
			if (h) {
				u.push(h);
			}
		});
		//
		// sort unit by name
		u = u.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	}
</script>

{#if debug}
	<div>
		<h2>Meta</h2>
		<div>
			Grand Strategy: {parsedList.meta.grandStrategy}<br />
			Faction: {parsedList.meta.faction}<br />
			SubFaction: {parsedList.meta.subfaction}<br />
		</div>
		<h2>Leader</h2>
		{#if parsedList.leaders}
			<div class="leaders">
				{#each parsedList.leaders as leader}
					<div class="leader">
						{leader.name}<br />
						{#each leader.options as ability}
							- {ability}<br />
						{/each}
					</div>
				{/each}
			</div>
		{/if}
		{#if parsedList.battleline}
			<h2>Battleline</h2>
			<div class="battlelines">
				{#each parsedList.battleline as battleLine}
					<div class="bl">
						{battleLine.name}<br />
						{#each battleLine.options as ability}
							- {ability}<br />
						{/each}
					</div>
				{/each}
			</div>
		{/if}
		{#if parsedList.other.length > 0}
			<h2>Other</h2>
			<div class="others">
				{#each parsedList.other as other}
					<div class="other">
						{other.name}<br />
						{#each other.options as ability}
							- {ability}<br />
						{/each}
					</div>
				{/each}
			</div>
		{/if}
		{#if parsedList.terrain}
			<h2>Terrain</h2>
			<div class="terrains">
				{#each parsedList.terrain as terrain}
					<div class="terrain">
						{terrain.name}<br />
						{#each terrain.options as ability}
							- {ability}<br />
						{/each}
					</div>
				{/each}
			</div>
		{/if}
	</div>
{/if}
<textarea class="no-print" bind:value={text} on:change={() => papa()} />
<div class="container">
	{#each u as unit}
		<div class="unit">
			<div class="statline">
				<div class="name">
					{unit.name}
				</div>
				<div>
					<span class="bold">M: </span>{unit.movement}
				</div>
				<div>
					<span class="bold">Sv: </span>{unit.save}
				</div>
				<div>
					<span class="bold">Br: </span>{unit.bravery}
				</div>
				<div>
					<span class="bold">W: </span>{unit.wounds}
				</div>
			</div>
			{#if unit.missileWeapons}
				<div class="weaponprofile">
					<div class="weapon-header">
						<div class="stat-header start bold">Missile</div>
						<div class="stat-header bold">Rng</div>
						<div class="stat-header bold">Att</div>
						<div class="stat-header bold">Hit</div>
						<div class="stat-header bold">Wnd</div>
						<div class="stat-header bold">Rnd</div>
						<div class="stat-header bold">Dam</div>
					</div>
					{#each unit.missileWeapons as weapon}
						<div class="weapon">
							<div class="stat start">{weapon.name}</div>
							<div class="stat">
								{weapon.range}
							</div>
							<div class="stat">
								{weapon.attacks}
							</div>
							<div class="stat">
								{weapon.toHit}
							</div>
							<div class="stat">
								{weapon.toWound}
							</div>
							<div class="stat">
								{weapon.rend}
							</div>
							<div class="stat">
								{weapon.damage}
							</div>
						</div>
					{/each}
				</div>
			{/if}
			{#if unit.meleeWeapons}
				<div class="weaponprofile">
					<div class="weapon-header">
						<div class="stat-header start bold">Melee</div>
						<div class="stat-header bold">Rng</div>
						<div class="stat-header bold">Att</div>
						<div class="stat-header bold">Hit</div>
						<div class="stat-header bold">Wnd</div>
						<div class="stat-header bold">Rnd</div>
						<div class="stat-header bold">Dam</div>
					</div>
					{#each unit.meleeWeapons as weapon}
						<div class="weapon">
							<div class="stat start">{weapon.name}</div>
							<div class="stat">
								{weapon.range}
							</div>
							<div class="stat">
								{weapon.attacks}
							</div>
							<div class="stat">
								{weapon.toHit}
							</div>
							<div class="stat">
								{weapon.toWound}
							</div>
							<div class="stat">
								{weapon.rend}
							</div>
							<div class="stat">
								{weapon.damage}
							</div>
						</div>
					{/each}
				</div>
			{/if}
			{#if unit.damageTable}
				<div class="weaponprofile space">
					<div class="weapon-header">
						<div class="stat-header bold">{unit.damageTable.header[0]}</div>
						<div class="stat-header bold">{unit.damageTable.header[1]}</div>
						<div class="stat-header bold">{unit.damageTable.header[2]}</div>
						<div class="stat-header bold">{unit.damageTable.header[3]}</div>
					</div>
					{#each unit.damageTable.rows as row}
						<div class="weapon">
							<div class="stat">{row[0]}</div>
							<div class="stat">{row[1]}</div>
							<div class="stat">{row[2]}</div>
							<div class="stat">{row[3]}</div>
						</div>
					{/each}
				</div>
			{/if}

			<div class="abilities">
				{#if unit.champion}
					<span class="bold">Champion: </span>
					{unit.champion}
				{/if}

				{#if unit.standard}
					<span class="bold">Standard: </span>{unit.standard}
				{/if}

				{#if unit.musician}
					<span class="bold">Musician: </span>{unit.musician}
				{/if}

				{#if unit.abilities}
					{#each unit.abilities as ability}
						<span class="bold">{ability.name}: </span>{ability.description}
					{/each}
				{/if}
			</div>
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		font-family: 'Open Sans', sans-serif;
		font-size: 12px;
		font-weight: 300;
		width: 100vw;
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}

	.unit {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 30rem;
		margin: 2rem;
	}

	.statline {
		display: grid;
		align-self: stretch;
		vertical-align: bottom;
		grid-template-columns: 3fr repeat(4, 1fr);
		grid-gap: 1rem;
		margin-bottom: 1rem;
	}

	.name {
		font-family: 'Montserrat', sans-serif;
		font-size: 16px;
	}

	.weaponprofile {
		display: flex;
		flex-direction: column;
		align-self: stretch;
	}

	.weapon {
		display: grid;
		align-self: stretch;
		grid-template-columns: 3fr repeat(6, 1fr);
		gap: 1rem;
	}

	.stat {
		text-align: center;
	}

	.stat-header {
		text-align: center;
	}

	.start {
		text-align: left;
	}

	.weapon-header {
		display: grid;
		align-self: stretch;
		grid-template-columns: 3fr repeat(6, 1fr);
		gap: 1rem;
		font-weight: 500;
		border-bottom: 1px solid black;
	}
	.weaponprofile > .weapon:nth-child(2n + 1) {
		background: rgba(0, 0, 0, 0.1);
	}

	.stat-header {
		font-weight: bold;
	}

	.abilities {
		margin-top: 1rem;
	}

	.bold {
		font-weight: 500;
		text-transform: uppercase;
	}

	textarea {
		width: 100%;
		height: 200px;
	}

	.space {
		margin-top: 1rem;
	}

	@media print {
		.container {
			font-size: 8px;
		}

		.name {
			font-size: 12px;
		}

		.unit {
			margin: 0.5rem;
			max-width: 45%;
		}

		.no-print {
			display: none !important;
		}
	}
</style>
