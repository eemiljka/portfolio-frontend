<script lang="ts">
	import { animate } from "motion";
import { onMount } from "svelte";
	import { fade } from "svelte/transition";

onMount(() => {
    setTimeout(() => {
        const wrapper = document.querySelector(".wrapper");
        if (wrapper) {
            wrapper.classList.add("showWrapper");
        }
    }, 500);
});

onMount(() => {
    animate('.intro', {opacity: [0, 1], y: [-20, 0]}, {duration: 1.5})
})

onMount(() => {
    animate('.intro-text', {opacity: [0, 1], y: [-20, 0]}, {duration: 1.5, delay: 1.5})
})

onMount(() => {
    animate("#tech-stack", {opacity: [0, 1], y: [-20, 0]}, {duration: 1.5, delay: 2.25})
})

onMount(() => {
    animate(".wrapper", {opacity: [0, 1], y: [-20, 0]}, {duration: 1.5, delay: 2})
})



let showFade = false;

function toggleFade() {
        showFade = !showFade;
    }


</script>

<div class="body">
    <div class="top-container" style="position: relative; text-align: center;">
    <div class="horizontal-line-top"></div>
    <div class="top">
        <div class="namepart">
            <h1 id="firstname"><button type="button" on:click={toggleFade}><a href="/">EEMIL</a></button></h1>
        <h1 id="middlename"><button type="button" on:click={toggleFade}><a href="/">JUHANI</a></button></h1>
        <h1 id="lastname"><button type="button" on:click={toggleFade}><a href="/">KÄRKKÄINEN</a></button></h1>
        <h1 id="at"><button type="button" on:click={toggleFade}><a href="/">@</a></button></h1>
        <h1 id="tilde"><button type="button" on:click={toggleFade}><a href="/">~/</a></button></h1>
        </div>
        <ul class="top-child">
            <li id="list-item-one"><button type="button" on:click={toggleFade}><a href="/about">ABOUT ME</a></button></li>
        </ul>
    </div>
    </div>

    <blockquote transition:fade={{delay: 100, duration: 100}}>
        <div class="intro-container" style="position: relative; text-align: center;">
        <div class="horizontal-line-intro"></div>
        <div class="intro">
            <h2 id="intro-title">INTRODUCTION</h2>
        </div>
            <p class="intro-text">
                I am a third year ICT student, majoring in Web Development and Digital Media, passionate in developing reliable full-stack software. Enthusiasm to make a difference with my work by improving society with new concepts and growing with acquired skills.
            </p>

    <div class="my-tech-stack" style="position: relative; text-align: center;">
        <h2 id="tech-stack">MY TECH STACK</h2>
        <div class="horizontal-line-stack"></div>
    </div>

    <div class="wrapper">
        <div class="item item1">TypeScript</div>
        <div class="item item2">React</div>
        <div class="item item3">JavaScript</div>
        <div class="item item4">Node.js</div>
        <div class="item item5">SQL</div>
        <div class="item item6">NoSQL</div>
        <div class="item item7">Next.js</div>
        <div class="item item8">SvelteKit</div>
        <div class="item item9">Git</div>
        <div class="item item10">Python</div>
    </div>

</blockquote>


</div>