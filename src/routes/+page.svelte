<script lang="ts">
	import { battleLine } from '$lib/gitz';
	import { parse, type Parsed } from '$lib/parser';
	let text = ``;
	let info: Parsed = {
		meta: {
			grandStrategy: '',
			faction: '',
			subfaction: ''
		},
		leaders: [],
		battleline: [],
		other: [],
		terrain: []
	};
	function papa() {
		info = parse(text);
	}
</script>

<div>
	<h2>Meta</h2>
	<div>
		Grand Strategy: {info.meta.grandStrategy}<br />
		Faction: {info.meta.faction}<br />
		SubFaction: {info.meta.subfaction}<br />
	</div>
	<h2>Leader</h2>
	{#if info.leaders}
		<div class="leaders">
			{#each info.leaders as leader}
				<div class="leader">
					{leader.name}<br />
					{#each leader.options as ability}
						- {ability}<br />
					{/each}
				</div>
			{/each}
		</div>
	{/if}
	{#if info.battleline}
		<h2>Battleline</h2>
		<div class="battlelines">
			{#each info.battleline as battleLine}
				<div class="bl">
					{battleLine.name}<br />
					{#each battleLine.options as ability}
						- {ability}<br />
					{/each}
				</div>
			{/each}
		</div>
	{/if}
	{#if info.other.length > 0}
		<h2>Other</h2>
		<div class="others">
			{#each info.other as other}
				<div class="other">
					{other.name}<br />
					{#each other.options as ability}
						- {ability}<br />
					{/each}
				</div>
			{/each}
		</div>
	{/if}
	{#if info.terrain}
		<h2>Terrain</h2>
		<div class="terrains">
			{#each info.terrain as terrain}
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

<textarea bind:value={text} on:change={() => papa()} />

<div class="container">
	{#each battleLine as unit}
		<div class="unit">
			<div class="statline">
				<div class="name">
					{unit.name}
				</div>
				<div>
					<b>M: </b>{unit.movement}
				</div>
				<div>
					<b>Sv: </b>{unit.save}
				</div>
				<div>
					<b>Br: </b>{unit.bravery}
				</div>
				<div>
					<b>W: </b>{unit.wounds}
				</div>
			</div>
			{#if unit.missileWeapons}
				<div class="weaponprofile">
					<div class="weapon-header">
						<div class="stat-header start">Missile</div>
						<div class="stat-header">Rng</div>
						<div class="stat-header">Att</div>
						<div class="stat-header">Hit</div>
						<div class="stat-header">Wnd</div>
						<div class="stat-header">Rnd</div>
						<div class="stat-header">Dam</div>
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
						<div class="stat-header start">Melee</div>
						<div class="stat-header">Rng</div>
						<div class="stat-header">Att</div>
						<div class="stat-header">Hit</div>
						<div class="stat-header">Wnd</div>
						<div class="stat-header">Rnd</div>
						<div class="stat-header">Dam</div>
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
			<div class="abilities">
				{#if unit.champion}
					<b>Champion: </b>
					{unit.champion}
				{/if}

				{#if unit.standard}
					<b>Standard: </b>{unit.standard}
				{/if}

				{#if unit.musician}
					<b>Musician: </b>{unit.musician}
				{/if}

				{#if unit.abilities}
					{#each unit.abilities as ability}
						<b>{ability.name}: </b>{ability.description}
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
		font-weight: bold;
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
		font-weight: bold;
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

	textarea {
		width: 100%;
		height: 200px;
	}
</style>
