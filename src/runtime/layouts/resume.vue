<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'GJSSSS | 简历',
})
</script>

<template>
  <div class="font-sans">
    <slot />
    <div id="__transition" />
  </div>
</template>

<style>

</style>
