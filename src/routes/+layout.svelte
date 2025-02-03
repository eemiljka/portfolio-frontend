<script lang="ts">
	import '../app.css';
	import Particles from '../components/Particles.svelte';
	let { children } = $props();
</script>

<div class="global-background">
	<Particles className="absolute inset-0 z-[-1] pointer-events-none" quantity={300} color='#ffffff' />
</div>

<div class="content">
	{@render children()}
</div>