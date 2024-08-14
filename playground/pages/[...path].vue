<script setup lang="ts">
const route = useRoute()
const paths = route.params.path || ['']
paths.unshift('')
const path = paths.join('/')
const { data, error } = await useAsyncData(path, () => queryContent(path).findOne())

useHead({
  title: data.value?.title ? `Playground | ${data.value.title}` : 'Playground',
})
</script>

<template>
  <article class="prose w-full">
    <div v-if="error">
      404 Not Found
    </div>
    <ContentRenderer
      v-else
      :data="data"
    >
      <div v-if="!data">
        Loading
      </div>
      <ContentRendererMarkdown
        v-else
        :value="data"
      />
    </ContentRenderer>
  </article>
</template>
