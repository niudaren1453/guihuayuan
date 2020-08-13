<template>
    <div class="details">
        <mt-header title="2017-市政">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="search" slot="right"></mt-button>
            <mt-button class="iconfont icon-wendang" style="margin-left:10px" slot="right"></mt-button>
        </mt-header>
        <div class="navbar">
            <router-link tag="div" to="/details/task" class="nav-item nav-task">
                <p>任务</p>
            </router-link>
            <router-link tag="div" to="/details/process" class="nav-item nav-process">
                <p>进程</p>
            </router-link>
            <router-link tag="div" to="/details/file" class="nav-item nav-file">
                <p>文件</p>
            </router-link>
            <router-link tag="div" to="/details/personnel" class="nav-item nav-personnel">
                <p>人员</p>
            </router-link>
            <router-link tag="div" to="/details/overview" class="nav-item nav-overview">
                <p>概览</p>
            </router-link>
        </div>
        <router-view></router-view>
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
.navbar
    color gray
    backgroun #Fff
    font-size 12px
    display flex
    align-items center
    justify-content center
    text-align center
    height 30px
    border-bottom 1px solid rgb(214, 214, 214)
    .nav-item
        flex 1
        height 100%
        line-height 200%
        // 路由样式
    .router-link-active
        color blue
        p
            height 100%
            display inline-block
            border-bottom 2px solid blue
</style>
