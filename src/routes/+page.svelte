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

<div class="projects">
<div class="project">
<h3>Device Hub</h3>
<h4>Device Management System</h4>
<div class="project-one">
<div id="project-one-text">
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates quis nisi ipsa illo in aliquid esse enim qui optio. Id minus error sequi neque assumenda animi quas dolor praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore blanditiis, facere nisi, exercitationem ab necessitatibus esse quibusdam commodi suscipit quis accusamus rem architecto atque nobis? Illum aspernatur molestias perspiciatis cumque?</p>
</div>
<img class="project-image" src="https://unsplash.it/400/300" alt="placeholder">
</div>
</div>

<div class="project">
<h3>JetBud</h3>
<div class="project-two">
<img class="project-image" src="https://unsplash.it/600/400" alt="placeholder">
<div id="project-two-text">
<p id="project-two-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quia unde voluptates repellat placeat alias hic possimus corrupti, accusamus autem eius commodi soluta vel illum. Nam, commodi tenetur? Ducimus, earum?</p>
</div>
</div>

<div class="project">
    <h3>Project X</h3>
    <h4>AMAZING PLACEHOLDER TEXT</h4>
    <div class="project-one">
    <div id="project-one-text">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates quis nisi ipsa illo in aliquid esse enim qui optio. Id minus error sequi neque assumenda animi quas dolor praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore blanditiis, facere nisi, exercitationem ab necessitatibus esse quibusdam commodi suscipit quis accusamus rem architecto atque nobis? Illum aspernatur molestias perspiciatis cumque?</p>
    </div>
    <img class="project-image" src="https://unsplash.it/600/400" alt="placeholder">
    </div>
    </div>

</div>
</div>
</div>
