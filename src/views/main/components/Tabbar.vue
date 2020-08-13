<template>
    <div class="tabbar">
        <!-- v-model="selected"/    -->
        <mt-tabbar>
            <mt-tab-item id="project">
                <router-link tag="img" to="/index" slot="icon" src >
                </router-link>
                项目
            </mt-tab-item>
            <mt-tab-item id="mine">
                <router-link tag="img" to="/index/mine" slot="icon" src >
                </router-link>
                 我的
            </mt-tab-item>
            <mt-tab-item id="notice">
                <router-link tag="img" to="/index/notice" slot="icon" src >
                </router-link>
                通知
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
.mint-tab-item-label
    text-decoration none
</style>