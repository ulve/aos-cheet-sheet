<script lang="ts">
	import { cards } from '$lib/cards';
</script>

<div class="container">
	{#each cards as card}
		{#each Array(card.count) as _}
			<div class="card">
				<div class="head">
					<h1>{card.title}</h1>
				</div>
				<div class="effect">{card.effect}</div>
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
		width: 39mm;
		height: 61mm;
		display: grid;
		grid-template-rows: auto 1fr auto;
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
		font-size: 12px;
	}

	.effect {
		text-align: center;
		font-family: 'Alegreya', serif;
		font-size: 24px;
		line-height: 1;
		margin-top: 10px;
		margin-bottom: 10px;
		font-weight: 900;
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
