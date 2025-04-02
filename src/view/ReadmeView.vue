<template>
  <div class="markdown" v-html="htmlContent"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const htmlContent = ref('')

onMounted(async () => {
  const res = await fetch('/src/assets/README.md')
  const text = await res.text()
  htmlContent.value = marked.parse(text)
})
</script>

<style scoped>
.markdown {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  line-height: 1.8;
}
</style>
