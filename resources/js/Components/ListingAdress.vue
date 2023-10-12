<template>
    <span>
        {{ listing.city }}, {{ listing.street }}, {{ listing.price }}
  </span>
</template>           

<script setup>
defineProps({
    listing: Object,
})
</script>