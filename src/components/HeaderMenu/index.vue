<template>
    <div class="header-title">
        111
    </div>
</template>

<script lang="ts" setup>
defineProps({
    menuData: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="less" scoped>
.header-title {
    position: absolute;
}
</style>