<script setup lang="ts">
import HeaderTitle from "@/components/HeaderMenu/index.vue"
import menuData from '@/util/index'
</script>

<template>
  <div class="app">
    <HeaderTitle :menuData="menuData"></HeaderTitle>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  position: relative;
}
</style>
