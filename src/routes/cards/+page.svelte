<script lang="ts">
</script>

<div class="card">
	<div class="head">
		<h2>Command Ability</h2>

		<h1>All-out attack</h1>
	</div>
	<div class="effect">
		<h1>+1 To-hit</h1>
	</div>
	<div class="body">
		<p>
			"You can use this command ability when you pick a friendly unit to shoot in your shooting
			phase or fight in the combat phase. That unit must receive the command. Add 1 to hit rolls for
			attacks made by that unit until the end of that phase"
		</p>
	</div>
	<div class="footer">
		<div class="footer-content">
			<!--<div>[Start of battle round] [Hero] [Movement] [Shooting] [Charge] [Combat] [Battleshock]</div>-->
			Combat Phase
		</div>
	</div>
</div>

<style>
	.card {
		width: 60mm;
		height: 83mm;
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
		height: 15mm;
		text-align: center;
		font-family: 'Alegreya', serif;
		font-size: 16px;
		font-weight: 900;
	}

	.body {
		margin: 5px;
		font-family: 'Open Sans', sans-serif;
		font-size: 12px;
		font-weight: 300;
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
