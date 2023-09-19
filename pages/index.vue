<template>
    <h1 class="text-3xl font-bold underline">
        首页
    </h1>
</template>

<script setup >

definePageMeta({
    middleware: ['auth']
})

</script>