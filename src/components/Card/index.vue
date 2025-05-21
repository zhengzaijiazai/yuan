<template>
    <div class="card">
        <!-- 标题 -->
        <div class="header">
            <a v-if="title" class="card-title">{{ title }}</a>
            <slot v-else name="title"></slot>
        </div>
        <div class="footer">
            <!-- 描述 -->
            <div class="card-describe">
                <div v-if="describe" class="describe"></div>
                <slot v-else name="describe"></slot>
            </div>
            <!-- 展示效果 -->
            <div class="card-display">
                <slot name="display"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const { title, describe } = defineProps({
    title: {
        type: String,
        default: ''
    },
    describe: {
        type: String,
        default: ''
    }
})
</script>

<style lang="less" scoped>
.card {
    width: 100%;
    .header{
        .card-title {
            font-size: larger;
            color: #606266;
            text-align: left;
            text-decoration: none;
            &:hover{
                color: #606266;
            }
            &:link{
                color: #606266;
            }
            &:active{
                color: #606266;
            }
        }
    }
    .footer{
        .card-describe{
            .describe{

            }
        }
        .card-display{
            display: flex;
        }
    }
}
</style>