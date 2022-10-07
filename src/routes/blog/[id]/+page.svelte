<script context="module">
    export async function load({ params }) {
        return {
            props: {
                id: params.id
            }
        }
    }
</script>

<script>
    import { blogPosts } from 'src/stores/medium.js'
    export let id;

    let index = id - 1;
</script>

<h1>{@html $blogPosts[index].title}</h1>

<div class="flex justify-between">
    <h3 class="text-lg">Written by <a href="https://brijr.dev">Bridger Tower</a></h3>
    <h4 class="text-lg ">{@html $blogPosts[index].date.substring(0, $blogPosts.length - 0)}</h4>
</div>

{@html $blogPosts[index].content}
