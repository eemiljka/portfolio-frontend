<script lang="ts">
    import { onMount } from "svelte";
    import { observeProjects } from "$lib/utils";
    import {animate } from "motion";
	

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
        animate("#list-item-two", {opacity: [0, 1], y: [-20, 0] }, {duration: 1.5, delay: 1.25})
    })

    onMount(() => {
        observeProjects();
    });
</script>
<div class="body">
    <div class="top">
        <div class="namepart">
        <h1 id="firstname">Eemil</h1>
        <h1 id="middlename">Juhani</h1>
        <h1 id="lastname">Kärkkäinen</h1>
        <h1 id="at">@</h1>
        <h1 id="tilde">~/</h1>
        </div>

        
        <ul class="top-child">
            <li id="list-item-two">SKILLS & EXPERIENCE</li>
            <li id="list-item-one">ABOUT ME</li>
        </ul>
    </div>

    <div class="vertical-line"></div>

    <h2>Projects/</h2>

    <div class="vertical-line2"></div>
    <div class="horizontal-line2"></div>

    <div class="projects">
        <div class="project">
            <h3>Project 1 | Short Description of Project 1</h3>
            <div class="project-one">
                <div id="project-one-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates quis nisi ipsa illo in aliquid esse enim qui optio. Id minus error sequi neque assumenda animi quas dolor praesentium.</p>
                </div>
                <img class="project-image" src="https://placehold.co/600x400" alt="placeholder">
            </div>
        </div>
        <div class="project">
            <h3>Project 2 | Short Description of Project</h3>
            <div class="project-one">
                <div id="project-one-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates quis nisi ipsa illo in aliquid esse enim qui optio. Id minus error sequi neque assumenda animi quas dolor praesentium.</p>
                </div>
                <img class="project-image" src="https://placehold.co/600x400" alt="placeholder">
            </div>
        </div>
        <div class="project">
            <h3>Project 3 | Short Description of Project</h3>
            <div class="project-one">
                <div id="project-one-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates quis nisi ipsa illo in aliquid esse enim qui optio. Id minus error sequi neque assumenda animi quas dolor praesentium.</p>
                </div>
                <img class="project-image" src="https://placehold.co/600x400" alt="placeholder">
            </div>
        </div>
        <div class="project">
            <h3>Project 4 | Short Description of Project</h3>
            <div class="project-one">
                <div id="project-one-text">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis voluptates quis nisi ipsa illo in aliquid esse enim qui optio. Id minus error sequi neque assumenda animi quas dolor praesentium.</p>
                </div>
                <img class="project-image" src="https://placehold.co/600x400" alt="placeholder">
            </div>
        </div>
    </div>
</div>
