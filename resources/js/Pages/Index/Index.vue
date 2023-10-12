<template>
  <h1>Index</h1>
  <Link href="/hello">Show Page</Link>
  <div>{{ message }}</div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'

defineProps({
    message: String,
})
</script>


