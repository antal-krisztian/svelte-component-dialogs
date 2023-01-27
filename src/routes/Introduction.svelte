<hgroup>
	<h1>Svelte Component Dialogs</h1>
	<h2>Easy to use dialog manager for Svelte</h2>
</hgroup>

<p>
	Svelte Component dialogs was built after I took a quick look at the available component libraries
	for Svelte, and realized that most of them handle dialogs in the following way:
</p>

<pre>
<code>
<b>{'<'}script></b>
	<i>const</i> isOpen = <b>false</b>;
<b>{'<'}/script></b>

<u>{'<'}button <b>on</b>:<i>click</i>={'{'}() <i>=></i> (isOpen = <b>true</b>){'}'}></u
		>Open Dialog<u>{'<'}/button></u>
<u>{'<'}Dialog <b>open</b>:<i>isOpen</i>></u>
	Content...
<u>{'<'}/Dialog></u>
</code>
</pre>

<p>
	This is fine, but as a developer who has mostly worked with Angular in the past, I missed the
	ability to open dialogs with reusable, pre-made components as their content.
</p>
<p>
	I would very much prefer the following (inspired by the <a
		href="https://akveo.github.io/nebular/">Nebular UI Kit</a
	>) syntax:
</p>
<pre>
<code>
<b>{'<'}script></b>
	<b>import</b> <i>PreMadeComponent</i> <b>from</b> './PreMadeComponent.svelte';
	<b>import</b> {'{'} <i>openDialog</i> {'}'} <b>from</b> 'svelte-component-dialogs';

	<i>const</i> open = () => {'{'}
		<i>openDialog</i>(<u>PreMadeComponent</u>, {'{'} closeOnEsc: <b>false</b>, context: {'{'} title: <b
			>'Dialog Title'</b
		> {'}'} {'}'});
	{'}'};
<b>{'<'}/script></b>

<u>{'<'}button <b>on</b>:<i>click</i>={'{'}<i>open</i>{'}'}></u>Open Dialog<u>{'<'}/button></u>
</code>
</pre>
