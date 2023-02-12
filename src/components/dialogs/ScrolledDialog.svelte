<script lang="ts">
	import type { Dialog } from '$lib';

	export let dialogRef: Dialog;
</script>

<article>
	<header>
		<button
			type="button"
			class="close"
			aria-label="Close"
			title="Close"
			on:click={() => dialogRef.close()}
		/>
		<h4>Scrolled content</h4>
	</header>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam. Facilisis gravida
		neque convallis a cras semper. Et malesuada fames ac turpis egestas maecenas pharetra. Magna
		fringilla urna porttitor rhoncus dolor purus non enim praesent. Viverra adipiscing at in tellus
		integer feugiat scelerisque varius. Nibh nisl condimentum id venenatis a condimentum vitae
		sapien. Sem integer vitae justo eget magna. Netus et malesuada fames ac turpis egestas. Feugiat
		sed lectus vestibulum mattis. Rhoncus dolor purus non enim praesent elementum facilisis leo.
		Nisl rhoncus mattis rhoncus urna neque. Odio morbi quis commodo odio aenean sed adipiscing. Ac
		tortor vitae purus faucibus ornare. Felis imperdiet proin fermentum leo vel orci. Laoreet id
		donec ultrices tincidunt arcu non sodales neque sodales. Hendrerit gravida rutrum quisque non
		tellus. Neque sodales ut etiam sit amet. Mauris in aliquam sem fringilla ut morbi tincidunt
		augue. Adipiscing elit pellentesque habitant morbi tristique senectus. Iaculis eu non diam
		phasellus vestibulum lorem. Pretium fusce id velit ut tortor pretium viverra. Vivamus at augue
		eget arcu dictum varius duis at. Sit amet justo donec enim diam. Vitae tempus quam pellentesque
		nec nam aliquam. Eget duis at tellus at urna. Ultrices vitae auctor eu augue ut lectus arcu
		bibendum. Facilisis volutpat est velit egestas dui id ornare. Augue neque gravida in fermentum
		et. Aenean pharetra magna ac placerat vestibulum lectus. Tincidunt id aliquet risus feugiat in.
		Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Et malesuada fames ac turpis
		egestas. In mollis nunc sed id semper risus in. Nisl rhoncus mattis rhoncus urna neque viverra
		justo nec ultrices. Purus faucibus ornare suspendisse sed. Vel orci porta non pulvinar neque
		laoreet suspendisse interdum consectetur. Egestas fringilla phasellus faucibus scelerisque
		eleifend donec. Eget sit amet tellus cras adipiscing enim eu. Odio pellentesque diam volutpat
		commodo sed egestas. Accumsan in nisl nisi scelerisque. Aliquet enim tortor at auctor. Tellus
		elementum sagittis vitae et. Ultrices gravida dictum fusce ut. Bibendum arcu vitae elementum
		curabitur vitae nunc sed velit. Tempor orci dapibus ultrices in iaculis nunc sed augue. Enim
		facilisis gravida neque convallis a cras. Eget velit aliquet sagittis id consectetur purus ut
		faucibus pulvinar. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Id aliquet
		lectus proin nibh nisl condimentum id. Morbi enim nunc faucibus a pellentesque. Sit amet mattis
		vulputate enim. Facilisis magna etiam tempor orci eu. Ut aliquam purus sit amet luctus venenatis
		lectus. Velit sed ullamcorper morbi tincidunt. Elementum nisi quis eleifend quam adipiscing
		vitae proin. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Sagittis nisl
		rhoncus mattis rhoncus. Est sit amet facilisis magna etiam tempor. Felis imperdiet proin
		fermentum leo vel orci porta non. Quam lacus suspendisse faucibus interdum posuere lorem ipsum.
		Arcu vitae elementum curabitur vitae nunc sed. Lectus mauris ultrices eros in cursus. Dolor
		magna eget est lorem ipsum dolor. Interdum velit laoreet id donec ultrices tincidunt arcu non
		sodales. Id velit ut tortor pretium viverra suspendisse. Facilisi nullam vehicula ipsum a arcu
		cursus vitae congue. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
		pellentesque. Vitae ultricies leo integer malesuada nunc vel risus commodo.
	</p>
</article>

<style>
	article {
		border-radius: 0.5rem;
		min-width: 600px;
		max-height: 600px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	p {
		overflow: auto;
		max-height: 100%;
	}

	h4 {
		margin: 0;
	}

	header {
		padding: 1rem;
	}

	button {
		margin-bottom: 0;
	}

	button.close {
		background-color: transparent;
		border: none;
	}
</style>
