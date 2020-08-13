<template>
    <div class="file">
        <div class="tabbar">
            <router-link tag="div" to='/details/file/electronicsfile'> 电子文件</router-link>
            <router-link tag="div" to='/details/file/entity'>实物文件</router-link>
        </div>
        <div class="warp">
            <router-view></router-view>
        </div>
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

.file
    background #f7f7f7
    min-height 100vh
.wrap
    position: absolute;
    left: 0;
    right: 0;
    top: 73px;
    bottom: 0;
    overflow: auto;
.tabbar
    height 45px
    width 100%
    text-align center
    border-bottom 2px solid rgb(211,211,211)
    box-sizing border-box
    .router-link-active
        background #000000
    div
        margin-top 15px
        display inline-block
        padding 4px 8px
        height 20px
        border 1px solid rgb(211,211,211)
        font-size 14px
        color gray

</style>