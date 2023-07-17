<script lang="ts" setup>
import { Article } from '../../../types/types'

const { params } = useRoute()
useHead({
    title: `Posts Tagged with ${params.slug[0]}`,
    meta: [{ name: 'description', content: 'Blog Post tag archive' }],
})
// Search the content in the blog folder
// for posts where the tags include this one.
// Sort them in reverse date order, and
// only show the info we need in this component
const parsedContent = await queryContent('blog')
    .where({ tags: { $contains: params.slug[0] } })
    .sort({ date: -1 })
    .only(['_path', 'title', 'description', 'tags'])
    .find()

const articles = computed(() => {
    return parsedContent as Article[]
})
</script>
<template>
    <div>
        <h1>Posts tagged with '{{ params.slug[0] }}'</h1>
        <hr />
        <BlogPostsList
            v-if="articles.length > 0"
            :articles="articles"
        ></BlogPostsList>
        <p v-else>Sorry, nothing found.</p>
    </div>
</template>
