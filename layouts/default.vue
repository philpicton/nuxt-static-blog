<template>
    <div class="dark:bg-slate-900 bg-slate-300 min-h-[100vh] transition-all">
        <SiteHeader></SiteHeader>
        <main
            class="prose dark:prose-invert prose-slate max-w-2xl px-3 py-7 mx-auto bg-white sm:px-8 sm:shadow dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 sm:rounded-lg dark:prose-a:text-sky-500 dark:hover:prose-a:text-sky-600 prose-a:text-sky-700 hover:prose-a:text-sky-600"
        >
            <slot />
        </main>
        <SiteFooter></SiteFooter>
    </div>
</template>

<style lang="postcss">
/* override tailwind's styles for inline code */
.prose :where(code):not(:where(pre *)) {
    @apply bg-slate-200 dark:bg-slate-900 p-1 rounded font-normal;
}
/* and the headings */
.prose h4 > a,
.prose h3 > a,
.prose h2 > a {
    @apply text-slate-800 dark:text-white text-2xl no-underline;
}
</style>
