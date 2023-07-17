<script setup lang="ts">
import { Article } from '~/types/types'
useHead({
    title: 'Recent Blog Posts',
    meta: [
        { name: 'description', content: 'Index of recent blog posts by me' },
    ],
})

// this returns content typed as 'ParsedContent'
const parsedContent = await queryContent('blog')
    .sort({ date: -1 })
    .only(['_path', 'title', 'description', 'tags'])
    .find()

// This converts it to an Article[] type for our component
const articles = computed(() => {
    return parsedContent as Article[]
})
</script>
<template>
    <section>
        <h1>Recent Posts</h1>
        <hr />
        <BlogPostsList
            v-if="articles.length > 0"
            :articles="articles"
        ></BlogPostsList>
        <p v-else>Sorry, nothing found.</p>
    </section>
</template>
