<script>
    import { onMount } from "svelte/internal";
    import jribbble from 'jribbble/dist/jribbble.min.js'

    onMount(() => {
        // @ts-ignore
        jribbble.shots({token: "b855d7b61befd81f191487147eb60df8d6d0cc625bb978fda8a3f73eeddc9653"}, function(shots) {
            // @ts-ignore
            document.querySelector(".dribbble-shots-list").innerHTML = shots.reduce(function(html, shot) {
                return html + '<li class="dribbble-shot"><a href="'+  shot.html_url + '" target="_blank"><img class="dribbble-img" src="' + shot.images.normal + '"></a></li>';
    }, "");
});
    })
</script>

<svelte:head>
    <script src="jribbble/dist/jribbble.min.js"></script>
</svelte:head>



<style>
    .dribbble-shots-list {
        display: grid; 
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }

    h1 {
        font-size: 2em;
        margin: 1rem 0;
    }

    /* h2 {
        font-size: 1.5em;
        margin: 1rem 0;
    } */

    h3 {
        font-size: 1.25em;
        margin: 1rem 0;
        font-style: italic;
    }
</style>

<!-- H1 -->
<section class="my-12 pl-6 border-l border-l-white">
    <h1>We have worked with some <span class="font-serif italic">amazing</span> companies throughout North America.</h1>
</section>

<!-- intro to page -->
<p class="font-light">
    Check out the companies Zion has worked with in the past below. Follow the links to see more of the work.
</p>

<section class="flex gap-4">
    <a class="w-fit pb-2 pt-12 flex border-b hover:text-[#C7CEFF] hover:border-[#C7CEFF]" href="https://tally.so/r/31A6rQ">
        <div class="hover:pr-2 transition-all">Get a Project Quote</div> 
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 15.25V6.75H8.75"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7L6.75 17.25"></path>
        </svg>
    </a>
    <a class="w-fit pb-2 pt-12 flex border-b hover:text-[#C7CEFF] hover:border-[#C7CEFF]" href="https://dribbble.com/brijr">
        <div class="hover:pr-2 transition-all">See my Design Feed</div> 
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 15.25V6.75H8.75"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7L6.75 17.25"></path>
        </svg>
    </a>
</section>



<!-- image -->
<img class="py-12" src="https://images.unsplash.com/photo-1604515586704-3e8d954b47ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="ocean water in black and white">

<!-- Work Examples -->
<section class="my-12">
    <h3 class="font-serif p-0 m-0">Some Recent Work</h3>
    <a class="hover:pl-6 transition-all block mb-4 pl-4 border-l border-l-white" href="http://hustlecoin.io">Branding and Web Development for <span class="font-serif italic">HustleCoin</span></a>
    <a class="hover:pl-6 transition-all block mb-4 pl-4 border-l border-l-white" href="http://socal.flights">Branding and Web Development for <span class="font-serif italic">SoCal.Flights</span></a>

</section>

<!-- Design Feed -->
<section class="my-12">
    <h3 class="font-serif p-0 m-0">Zion Design Feed™</h3>

    <ul class="dribbble-shots-list"></ul>
</section>

<!-- footer -->
<footer class="py-32 text-sm italic font-light">
    © Zion Design LLC, 2018-Present | Created by <a class="font-serif italic hover:text-[#C7CEFF] transition-all" href="https://bridger.info">Bridger Tower</a>
</footer>
