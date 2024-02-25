<script lang="ts">
	import { cards } from '$lib/cards';
</script>

<div class="container">
	{#each cards as card}
		{#each Array(card.count) as _}
			<div class="card">
				<div class="head">
					<h2>{card.type}</h2>
					<h1>{card.title}</h1>
				</div>
				<div class="effect">{card.effect}</div>
				<div class="body">
					"{card.body}
				</div>
				<div class="footer">
					<div class="footer-content">
						{card.phase}
					</div>
				</div>
			</div>
		{/each}
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.card {
		page-break-inside: avoid;
		margin: 10px;
		width: 62mm;
		height: 86mm;
		display: grid;
		grid-template-rows: auto auto 1fr auto;
		border-radius: 5px;
		border: 2px solid #000;
	}

	.head {
		font-family: 'Montserrat', sans-serif;
		font-size: 16px;
		padding: 5px;
		background: #090909;
	}

	.head h1 {
		font-weight: 900;
		text-transform: uppercase;
		color: white;
		font-size: 16px;
	}

	.head h2 {
		font-weight: 600;
		color: white;
		font-size: 10px;
		margin-bottom: 0px;
		margin-top: 2px;
	}

	.effect {
		text-align: center;
		font-family: 'Alegreya', serif;
		font-size: 32px;
		line-height: 1;
		margin-top: 10px;
		margin-bottom: 10px;
		font-weight: 900;
	}

	.body {
		margin: 15px;
		font-family: 'Open Sans', sans-serif;
		font-size: 10px;
		font-weight: 300;
		font-style: italic;
	}

	.footer {
		border-top: 2px solid #000;
		position: relative;
		height: 30px;
		font-family: 'Montserrat', sans-serif;
		font-size: 12px;
		background: lightgray;
	}

	.footer-content {
		position: absolute;
		bottom: 7px;
		right: 7px;
	}
</style>
