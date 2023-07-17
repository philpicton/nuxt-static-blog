<script setup>
const options = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}
</script>

<template>
    <div>
        <article>
            <ContentDoc>
                <template #not-found >
                    <h1>Document not found</h1>
                </template>
                <template #default="{ doc }">
                    <BlogTag
                    v-for="tag in doc.tags"
                    :key="tag"
                    :text="tag"
                    ></BlogTag>
                    <p>
                        <h1>{{ doc.title }}</h1>
                        <small>{{new Date(doc.date).toLocaleDateString('en-GB', options)}}</small>
                    </p>
                    <hr />
                    <ContentRenderer :value="doc" />
                </template>
            </ContentDoc>
        </article>
        <hr />
        <BackButton to="/blog"></BackButton>
    </div>
</template>
