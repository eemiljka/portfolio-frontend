<script lang="ts">
    import { onMount } from "svelte";
    import { observeProjects } from "$lib/utils";
    import {animate, delay } from "motion";
	import { fade } from "svelte/transition";

    // get data from SvelteKit load function
    export let data;

    let projects = data?.projects ?? [];

    // Animations
    onMount(() => {
        animate("#firstname", {opacity: [0, 1], y: [-20, 0] }, {duration: 1.5})
    })

    onMount(() => {
        animate("#middlename", {opacity: [0, 1], y: [-20, 0] }, {duration: 1.5, delay: 0.25})
    })

    onMount(() => {
        animate("#lastname", {opacity: [0, 1], y: [-20, 0] }, {duration: 1.5, delay: 0.5})
    })

    onMount(() => {
        animate("#at", {opacity: [0, 1], y: [-20, 0] }, {duration: 1.5, delay: 0.75})
    })

    onMount(() => {
        animate("#tilde", {opacity: [0, 1], y: [-20, 0] }, {duration: 1.5, delay: 1})
    })

    onMount(() => {
        animate("#list-item-one", {opacity: [0, 1], y: [-20, 0] }, {duration: 1.5, delay: 1.5})
    })


    onMount(() => {
        animate("#projectstitle", {opacity: [0, 1], y: [-20, 0] }, {duration: 1.5, delay: 1.75})
    })

    onMount(() => {
        observeProjects();
    });

    // Fade transition from svelte/transition
    let showFade = false;

    function toggleFade() {
        showFade = !showFade;
    }
    
</script>
<div class="body">
    <div class="top-container" style="position: relative; text-align: center;"></div>
    <div class="home-top-line"></div>
    <div class="top">
        <div class="namepart">
            <h1 id="firstname"><a href="/">EEMIL</a></h1>
            <h1 id="middlename"><a href="/">JUHANI</a></h1>
            <h1 id="lastname"><a href="/">KÄRKKÄINEN</a></h1>
            <h1 id="at"><a href="/">@</a></h1>
            <h1 id="tilde"><a href="/">~/</a></h1>
        </div>


        <ul class="top-child">
            <li id="list-item-one"><button type="button" on:click={toggleFade}><a href="/about">ABOUT ME</a></button></li>
        </ul>

    </div>
    <div class="content">



    <blockquote transition:fade={{delay: 250, duration: 300}}>

    <div class="vertical-line"></div>

    <h2 id="projectstitle">PROJECTS/</h2>

    <div class="vertical-line2"></div>
    <div class="horizontal-line2"></div>

    <div class="projects">
        <!-- Iterating over the database data and reading all the projects in order -->
            {#each projects as project}
            <div class="project">
                <div class="project-section">
            <h3><a href={project.project_link}>{project.project_name}</a></h3>
            <div class="project-one">
                <div id="project-one-text">
                    <p class="project-text">{project.project_description}</p>
                </div>
                <img class="project-image" src={project.image_path} alt="project">
            </div>
            </div>
        </div>
        {/each}
    </div>
</blockquote>
</div>
</div>

