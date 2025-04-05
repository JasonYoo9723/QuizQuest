<template>
    <header class="bg-white shadow-sm px-4 py-2 sticky top-0 z-50">
      <div class="container mx-auto max-w-7xl flex items-center justify-between">
        
        <!-- 왼쪽: 로고 -->
        <RouterLink to="/" class="text-2xl font-bold text-blue-600">
          QuizQuest
        </RouterLink>
  
        <!-- 중앙: 네비게이션 -->
        <nav class="hidden md:flex gap-6 text-sm text-gray-700">
          <RouterLink to="/learn" class="hover:underline">학습 도구</RouterLink>
          <RouterLink to="/solve" class="hover:underline">문제풀이</RouterLink>
          <RouterLink to="/note" class="hover:underline">오답노트</RouterLink>
        </nav>
  
        <!-- 오른쪽: 버튼 -->
        <div class="flex gap-3 text-sm">
          <button class="text-gray-600 hover:text-black">+ 만들기</button>
          <button class="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700">로그인</button>
        </div>
  
      </div>
    </header>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  </script>
  