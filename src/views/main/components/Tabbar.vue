<template>
    <div class="tabbar">
        <!-- v-model="selected"/    -->
        <mt-tabbar>
            <mt-tab-item id="project">
                <router-link tag="div" to="/index/project">项目</router-link>
            </mt-tab-item>
            <!-- <mt-tab-item id="mine">
                <router-link tag="img" to="/index/mine" slot="icon" src >
                </router-link>
                 我的
            </mt-tab-item>-->
            <mt-tab-item id="notice">
                <router-link tag="div" to="/index/notice">通知</router-link>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    components: {}
}
</script>

<style lang="stylus" scoped>
.mint-tab-item-label {
    text-decoration: none;
}
.router-link-active
    color #00bbd3
.mint-tabbar
    height 40px
    overflow hidden
    .mint-tab-item
        background rgba(211,211,211,0.1)
        opacity 0.8
    div
        padding 5
        font-size 15px
</style>