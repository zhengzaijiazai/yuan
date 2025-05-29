<template>
    <div class="header-title">
        <div class="sign cursor" @click="router.push('/home')">yuan</div>
        <div class="content">
            <div class="menu">
                <div class="menu-item" v-for="item, index in menuData" :key="index">
                    <div class="menu-item-content" :class="{ cursor: item?.children || item?.path }"
                        @click="handleClick(item)">
                        <img v-if="item?.icon" :src="item.icon" alt="">
                        <span>{{ item.name }}</span>
                    </div>
                    <div v-if="item?.children && item?.children?.length > 0" class="suspension">
                        <div class="suspension-item" v-for="(child, index) in item.children" :key="index"
                            @click="handleClick(child)">
                            <img v-if="child?.icon" :src="child.icon" alt="">
                            <span>{{ child.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="other"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults } from 'vue'
import type { PropsType } from './type.ts'
import { useRouter } from 'vue-router';

const router = useRouter()

const { menuData } = withDefaults(defineProps<PropsType>(), {
    menuData: () => []
})

const emit = defineEmits(['onClick'])

const handleClick = (item: any) => {
    console.log("🚀 ~ handleClick ~ item:", item)
    if (item?.children && item?.children?.length <= 0) {
        return
    }
    emit('onClick', item)
}
</script>

<style lang="less" scoped>
.header-title {
    width: 100%;
    height: 100px;
    position: sticky;
    top: 0;
    // background-color: lightgray;
    display: flex;

    .sign {
        width: 15%;
        height: 100%;
        font-size: 50px;
        text-align: center;
        letter-spacing: 0.5em;
        color: transparent;
        background-image: linear-gradient(to bottom, #0098f9, #0099f7, #0099f4, #009af2, #009aef, #00a4f4, #00aef8, #00b8fb, #00cdff, #00dfea, #00edbd, #00f680);
        background-clip: text;
        -webkit-background-clip: text;

    }

    .content {
        width: 70%;
        height: 100%;
        background-color: yellow;
        display: flex;

        .menu {
            display: flex;
            justify-content: center;
            height: 100%;

            .menu-item {
                width: 150px;
                position: relative;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    .suspension {
                        display: block;
                    }
                }


                .menu-item-content {
                    width: 100%;
                    height: 100%;
                    font-size: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .suspension {
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    top: 100%;
                    font-size: 20px;
                    display: none;

                    .suspension-item {
                        padding: 5px 10px;
                    }
                }
            }
        }
    }

    .other {
        width: 15%;
        height: 100%;
        background-color: red;
    }
}


.cursor {
    cursor: pointer;
}
</style>