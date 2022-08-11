import { writable } from "svelte/store";

export const blogPosts = writable([]);

const fetchPosts = async () => {
    const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@brijr");
    const blog = await res.json();
    const posts = blog.items.map((post, index) => {
        return {
            title: post.title,
            author: post.author,
            content: post.content,
            date: post.pubDate,
            id: index + 1
        }
    });
    blogPosts.set(posts);
}

fetchPosts();