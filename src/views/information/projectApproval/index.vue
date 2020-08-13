<template>
    <!--立项 -->
    <div class="lixiang-container">
        <div class="tabbar-ul">
            <div>
                <p class="tabbar-title">立项</p>
            </div>
            <!-- 2020/8/4 以下注释有用，保留 -->
            <!-- <router-link :to="{name:'electronicsfile1',query:{id:id}}"  tag="div" class="tabbar-li">
                <p>电子文件</p>
            </router-link> -->
            <!-- <router-link :to="{name:'entityfile1',query:{id:id}}"  tag="div" class="tabbar-li">
                <p>实物文件</p>
            </router-link> -->
            <!-- <div></div> -->
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 0
        }
    },
    mounted() {
        this.id = this.$route.query.id // 获取上个路由传来的参数 id
    },
    components: {}
}
</script>

<style lang="stylus" scoped>
$color = rgb(0, 186, 173)
.lixiang-container
    position absolute
    left 0
    right 0
    top 234px
    bottom 1px
    overflow auto
.tabbar-ul
    width 100%
    height 40px
    display flex
    .tabbar-title
        color #ffffff
        width 50px
        background $color
        text-align center
        padding 3px
        border-radius 20px
        font-size 13px
    div
        flex 1
        display flex
        align-items center
        justify-content center
    .tabbar-li
        color gray
        font-size 14px
        p
            padding-bottom 2px
    .router-link-active
        color $color
        border-bottom 2px $color solid

</style>
