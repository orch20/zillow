<template>
  <div>
    <Link href="/">Home Page</Link>
    <Link href="/hello">Show Page</Link>
    <div v-if="flashSuccess" class="success">
      {{ flashSuccess }}
    </div>
    <slot />
    
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/inertia-vue3'

// page.props.value.flash.success
const page = usePage()
const flashSuccess = computed(() => page.props.value.flash.success)
</script>

<style scoped>
.success {
  color: white;
  background-color: green;
}
</style>
