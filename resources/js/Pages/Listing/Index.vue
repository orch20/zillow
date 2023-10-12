<template>
  <div v-for="listing in listings" :key="listing.id">
    <Link :href="`/listing/${listing.id}`">
      <ListingAdress :listing="listing" />
    </Link>
  </div>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import ListingAdress from '@/Components/ListingAdress.vue'

defineProps({
    listings: {
        type: Array,
    },
})
</script>
