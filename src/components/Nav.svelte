<script>
	import {
		EXAMPLES_PAGE,
		GETTING_STARTED_PAGE,
		INTRODUCTION_PAGE,
		API_PAGE
	} from '../utils/pages';
</script>

<nav>
	<ul>
		<li><strong>Svelte Component Dialogs</strong></li>
	</ul>
	<ul>
		<li><a href={INTRODUCTION_PAGE.link}>{INTRODUCTION_PAGE.name}</a></li>
		<li><a href={GETTING_STARTED_PAGE.link}>{GETTING_STARTED_PAGE.name}</a></li>
		<li><a href={API_PAGE.link}>{API_PAGE.name}</a></li>
		<li><a href={EXAMPLES_PAGE.link}>{EXAMPLES_PAGE.name}</a></li>
	</ul>
</nav>
