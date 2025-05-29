<template>
    <div class="home">
        <div class="cplist">

        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import type { listData } from './type.ts'

const data = reactive<listData>([
    {
        text: 'button',
        route: '/Button'
    }
])
</script>

<style lang="less" scoped>
.cplist {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
</style>