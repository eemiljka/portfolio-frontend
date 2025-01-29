<script lang="ts">
    import { onMount } from "svelte";
    import { observeProjects } from "$lib/utils";

    onMount(() => {
        observeProjects();
    });
</script>
<div class="body">
<div class="top">
<h1 class="top-child">EEMIL JUHANI KÄRKKÄINEN</h1>

<ul class="top-child">
    <li>ABOUT ME</li>
    <li>RESUME</li>
</ul>
</div>

<div class="vertical-line"></div>

<h2>PROJECTS</h2>

<div class="vertical-line2"></div>
<div class="horizontal-line2"></div>

<div class="projects">
<div class="project">
<h3>Device Hub | Device Management System</h3>
<div class="project-one">
<div id="project-one-text">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates quis nisi ipsa illo in aliquid esse enim qui optio. Id minus error sequi neque assumenda animi quas dolor praesentium.</p>
</div>
<img class="project-image" src="https://unsplash.it/500/300" alt="placeholder">
</div>
</div>
</div>
</div>
