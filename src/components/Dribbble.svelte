<!-- <script>
    import { onMount } from "svelte";
    import jribbble from 'jribbble/dist/jribbble.min.js'

    onMount(() => {
        // @ts-ignore
        jribbble.shots({token: import.meta.env.VITE_JRIBBBLE}, function(shots) {
            // @ts-ignore
            document.querySelector(".dribbble-shots-list").innerHTML = shots.reduce(function(html, shot) {
                return html + '<li class="dribbble-shot"><a href="'+  shot.html_url + '" target="_blank"><img class="dribbble-img" src="' + shot.images.normal + '"></a></li>';
            }, "");
        });
    })
</script>

<ul class="dribbble-shots-list"></ul>

<style>
    .dribbble-shots-list {
        display: grid; 
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
</style> -->