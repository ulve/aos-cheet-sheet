<script>
	import { battleLine } from '$lib/gitz';
</script>

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
						<div class="stat-header">Missile</div>
						<div class="stat-header">Rng</div>
						<div class="stat-header">Att</div>
						<div class="stat-header">Hit</div>
						<div class="stat-header">Wnd</div>
						<div class="stat-header">Rnd</div>
						<div class="stat-header">Dam</div>
					</div>
					{#each unit.missileWeapons as weapon}
						<div class="weapon">
							<div class="stat">{weapon.name}</div>
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
						<div class="stat-header">Melee</div>
						<div class="stat-header">Rng</div>
						<div class="stat-header">Att</div>
						<div class="stat-header">Hit</div>
						<div class="stat-header">Wnd</div>
						<div class="stat-header">Rnd</div>
						<div class="stat-header">Dam</div>
					</div>
					{#each unit.meleeWeapons as weapon}
						<div class="weapon">
							<div class="stat">{weapon.name}</div>
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
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	.statline {
		display: grid;
		align-self: stretch;
		grid-template-columns: 3fr repeat(4, 1fr);
		grid-gap: 1rem;
		margin-bottom: 1rem;
	}

	.name {
		font-weight: bold;
		font-size: 16px;
	}
	.weapon {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 1rem;
	}

	.weapon-header {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 1rem;
		font-weight: 500;
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
</style>
