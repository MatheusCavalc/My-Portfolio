<script setup>
const props = defineProps(['name'])
</script>

<template>
    <div class="flex gap-3 md:text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="h-4 w-4 lg:w-5 lg:h-5 md:mt-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>

        <p class="font-bold text-sm lg:text-base">{{ name }}</p>
    </div>
</template>