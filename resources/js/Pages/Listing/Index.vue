<template>
  <div v-for="listing in listings" :key="listing.id">
     <div>
          <Link :href="`/listing/${listing.id}`">
            <ListingAdress :listing="listing" />
          </Link>
        </div>
        <div>
          <Link :href="`/listing/${listing.id}/edit`">Edit</Link>
        </div>
        <div>
          <Link :href="`/listing/${listing.id}`" method="DELETE" as="button">Delete</Link>
  </div>
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
