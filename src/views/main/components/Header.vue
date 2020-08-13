<template>
    <header>
        <mt-header :title="title">
            <mt-button class="iconfont icon-weibiaoti--" slot="left"></mt-button>
            <mt-button slot="right" class="iconfont icon-search" style="margin-right:10px"></mt-button>
            <mt-button v-if="type" slot="right" class="iconfont icon-icon-test"></mt-button>
        </mt-header>
    </header>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        title: String, // 标题
        type: Number // 用来接收判断 1 项目 2 我的  3 通知
    },
    components: {}
}
</script>

<style lang="stylus" scoped>
.mint-header
    border-bottom 1px solid rgb(226, 226, 226)
.mint-tabbar
    background-color rgba(255, 255, 255, 0.6)
</style>