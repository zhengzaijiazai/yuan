<template>
    <div class="header-title">
        这是菜单
    </div>
</template>

<script lang="ts" setup>
const { menuData } = defineProps({
    menuData: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped>
.header-title {
    width: 100%;
    height: 100px;
    position: sticky;
    top: 0;
    background-color: #36d;
}
</style>