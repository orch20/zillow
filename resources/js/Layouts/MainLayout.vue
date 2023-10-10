<template>
    <div>
        <Link href="/">Home Page</Link>
        <Link href="/hello">Show Page</Link>
        <slot></slot>
        <div>{{ timer }}</div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';

const timer = ref(0);

setInterval(() => timer.value++, 1000);

</script>
