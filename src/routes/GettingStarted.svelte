<h2>Getting Started</h2>

<ol>
	<li>
		<p>Install the package using your favored package manager:</p>
		<p><code> npm install --save-dev svelte-component-dialogs </code></p>
	</li>
	<li>
		<p>
			Add the <code>DialogProvider</code> component somewhere in your app (for SvelteKit the base
			<code>+layout.svelte</code> file is a good place):
		</p>
		<pre>
<code>
<b>{'<'}script></b>
    <b>import</b> {'{'} <i>DialogProvider</i> {'}'} <b>from</b> 'svelte-component-dialogs';
<b>{'<'}/script></b>

<u>{'<'}slot \></u>
<u>{'<'}DialogProvider \></u>
</code>
</pre>
	</li>
	<li>
		<p>Start using dialogs:</p>
		<pre>
<code>
<b>{'<'}script></b>
    <b>import</b> <i>PreMadeComponent</i> <b>from</b> './PreMadeComponent.svelte';
    <b>import</b> {'{'} <i>openDialog</i> {'}'} <b>from</b> 'svelte-component-dialogs';

    <i>const</i> open = () => {'{'}
        <i>openDialog</i>(<u>PreMadeComponent</u>);
    {'}'};
<b>{'<'}/script></b>

<u>{'<'}button <b>on</b>:<i>click</i>={'{'}<i>open</i>{'}'}></u>Open Dialog<u>{'<'}/button></u>
</code>
</pre>
	</li>
</ol>
