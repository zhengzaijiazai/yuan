<script setup lang="ts">
import HeaderTitle from "@/components/HeaderMenu/index.vue"
import menuData from '@/util/menuData'
import { useRouter } from "vue-router";

const router = useRouter()

const onClick = (item: any) => {
  router.push(item.path)
}
</script>

<template>
  <div class="app">
    <HeaderTitle :menuData="menuData" @onClick="onClick"></HeaderTitle>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>