<template>
  <div class="dashboard-page">
    <h1 class="page-title">📋 QuizQuest 개발 Action Items</h1>

    <div class="category-selector mb-6">
      <label class="block mb-2 text-sm text-gray-300">자격증 종류</label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="cert in certifications"
          :key="cert.value"
          @click="selectedCert = cert.value"
          :class="['category-button', { selected: selectedCert === cert.value }]"
        >
          {{ cert.label }}
        </button>
      </div>
    </div>

    <div v-if="loading" class="text-gray-400 text-center mt-10">불러오는 중...</div>
    <div v-else v-html="renderedMarkdown" class="markdown-area"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const renderedMarkdown = ref('')
const loading = ref(true)
const selectedCert = ref('broker')

const certifications = [
  { label: '공인중개사', value: 'broker' },
  { label: '정보처리산업기사', value: 'itengineer' },
  { label: '수능기출문제', value: 'csat' }
]

onMounted(async () => {
  try {
    const res = await fetch('/ActionItems.md')
    const text = await res.text()
    renderedMarkdown.value = marked.parse(text)
  } catch (e) {
    renderedMarkdown.value = '# ❗ ActionItems.md 파일을 불러올 수 없습니다.'
  } finally {
    loading.value = false
  }
})
</script>
