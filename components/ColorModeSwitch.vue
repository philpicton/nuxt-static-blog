<script setup>
// Not using ts here as there is an issue with 
// types on Nuxt's Color Mode component. See
// https://github.com/nuxt-modules/color-mode/issues/182

const colorMode = useColorMode()
const onClick = () =>
	colorMode.value === 'light'
		? (colorMode.preference = 'dark')
		: (colorMode.preference = 'light')
</script>

<template>
	<button
		aria-label="Color Mode"
		class="w-5 h-5 hover:text-sky-500 transition flex flex-col justify-center"
		@click="onClick"
	>
		<ColorScheme placeholder="...">
			<Icon
				v-if="colorMode.value === 'dark'"
				name="ph:moon-bold"
				class="w-5 h-5 dark:text-white dark:hover:text-sky-500"
			/>
			<Icon
				v-else
				name="ph:sun-bold"
				class="w-5 h-5 dark:text-white dark:hover:text-sky-500"
			/>
		</ColorScheme>
	</button>
</template>
