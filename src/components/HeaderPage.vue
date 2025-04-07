<template>
  <header class="bg-white shadow-sm px-4 py-2 sticky top-0 z-50">
    <div class="container mx-auto max-w-7xl flex items-center justify-between">

      <!-- 로고 + 자격증 선택 -->
      <div class="flex items-center gap-4">
      <!-- 로고 -->
      <RouterLink to="/" class="text-2xl font-bold flex items-center">
        <span class="text-red-600">Q</span><span class="text-black">uiz</span><span class="text-red-600">Q</span><span class="text-black">uest</span>
      </RouterLink>

      <!-- 구분선 -->
      <div class="w-px h-6 bg-gray-300 mx-2"></div>

      <!-- 자격증 선택 -->
      <div class="flex items-center gap-2">
        <div id="cert-dropdown" class="relative">
          <span
            @click="toggleDropdown"
            class="cursor-pointer text-xs border px-2 py-1 rounded hover:bg-gray-100 text-gray-800 w-36 inline-block text-center"
          >
            {{ certStore.selectedCert.name }} ▼
          </span>

          <!-- 드롭다운 -->
          <ul
            v-if="showDropdown"
            class="absolute bg-white border rounded shadow-md mt-1 py-1 w-48 z-50"
          >
            <li v-for="(cert, index) in certStore.certifications" :key="index">
              <a
                href="#"
                @click.prevent="selectCert(cert)"
                class="block px-4 py-2 hover:bg-gray-100 text-gray-800"
              >
                {{ cert.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- 구분선 (햄버거 버튼과의 구분) -->
        <div class="h-6 w-px bg-gray-300 mx-2"></div>
      </div>
    </div>

      <!-- 모바일 햄버거 버튼 -->
      <button @click="toggleMenu" class="md:hidden text-2xl text-gray-800 focus:outline-none">
        ☰
      </button>

      <!-- 네비게이션 -->
      <nav class="hidden md:flex gap-6 text-sm text-gray-700">
        <RouterLink to="/learn" class="hover:underline">학습 도구</RouterLink>
        <RouterLink to="/solve" class="hover:underline">문제풀이</RouterLink>
        <RouterLink to="/note" class="hover:underline">오답노트</RouterLink>
        <RouterLink to="/dashboard" class="hover:underline">대시보드</RouterLink>
      </nav>

      <!-- 오른쪽 버튼 -->
      <div class="hidden md:flex gap-3 text-sm">
        <button class="text-gray-600 hover:text-black">+ 만들기</button>
        <button class="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700">로그인</button>
      </div>
    </div>

    <!-- 모바일 메뉴 -->
    <div v-if="menuOpen" class="md:hidden bg-white text-black px-4 pt-4 pb-2">
      <nav class="flex flex-col gap-3 text-sm">
        <RouterLink to="/learn" @click="closeMenu" class="hover:underline">학습 도구</RouterLink>
        <RouterLink to="/solve" @click="closeMenu" class="hover:underline">문제풀이</RouterLink>
        <RouterLink to="/note" @click="closeMenu" class="hover:underline">오답노트</RouterLink>
        <RouterLink to="/dashboard" @click="closeMenu" class="hover:underline">대시보드</RouterLink>

        <!-- 자격증 선택 (모바일) -->
        <div>
          <button @click="toggleMobileDropdown" class="text-left w-full hover:underline mt-2 text-gray-800">
            자격증 선택 ▼
          </button>
          <div v-if="mobileDropdown" class="pl-4 mt-1">
            <a
              v-for="(cert, index) in certStore.certifications"
              :key="index"
              href="#"
              @click.prevent="selectCert(cert)"
              class="block py-1 hover:underline text-gray-800"
            >
              {{ cert.name }}
            </a>
          </div>
        </div>

        <div class="flex gap-3 mt-2">
          <button class="text-gray-600 hover:text-black">+ 만들기</button>
          <button class="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700">로그인</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { useCertificationStore } from '@/stores/certification'

const menuOpen = ref(false)
const mobileDropdown = ref(false)
const showDropdown = ref(false)

const certStore = useCertificationStore()

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
  mobileDropdown.value = false
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

function toggleMobileDropdown() {
  mobileDropdown.value = !mobileDropdown.value
}

function selectCert(cert) {
  certStore.setCertification(cert)
  showDropdown.value = false
  closeMenu()
}

function handleClickOutside(event) {
  const dropdown = document.getElementById('cert-dropdown')
  if (dropdown && !dropdown.contains(event.target)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
