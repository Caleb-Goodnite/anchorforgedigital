<script>
	import '../app.css';
	import favicon from '$lib/assets/anchorforge-logo.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
