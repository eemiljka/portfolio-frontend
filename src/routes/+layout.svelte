<script lang="ts">
	import '../app.css';
	import Particles from '../components/Particles.svelte';
	let { children } = $props();
</script>

<div class="global-background">
	<!--Setting a pinkISH, greyISH, whiteISH color for the background particles-->
	<Particles className="absolute inset-0 z-[-1] pointer-events-none" quantity={200} color='#b39a9f' /> 
</div>

<div class="content">
	{@render children()}
</div>