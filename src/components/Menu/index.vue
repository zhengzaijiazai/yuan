<template>
    <div class="menu">
        <div v-if="direction == 'row'" class="menu-row"></div>
        <div v-else class="menu-column">
            <div v-for="(item) in menuData">
                <div class="menu-item">
                    <div class="menu-icon">
                        <img :src="item.icon" alt="">
                    </div>
                    <div class="menu-name">
                        {{ item.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { MenuProps } from "./type"
import { withDefaults } from "vue";

const { direction } = withDefaults(defineProps<MenuProps>(), {
    direction: 'row',
    menuData: () => []
})
</script>

<style lang="scss" scoped>
.menu {
    width: 100%;
    height: 100%;
}
</style>