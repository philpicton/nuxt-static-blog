<template>
	<NuxtLink
		:to="`/blog/tag/${text}`"
		class="bg-slate-300 dark:bg-slate-700 rounded-full px-4 py-1 no-underline mr-2 text-sm transition"
		>{{ text }}</NuxtLink
	>
</template>

<script setup>
defineProps({
	text: { type: String, default: '' },
})
</script>
