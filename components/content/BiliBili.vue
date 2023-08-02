<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <iframe
    :src="src"
    allowfullscreen="true"
    width="600"
    height="400"
    scrolling="no"
    frameborder="0"
    sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
  ></iframe>
</template>

<style scoped></style>
