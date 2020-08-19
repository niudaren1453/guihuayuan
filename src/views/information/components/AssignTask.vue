<template>
 <div class="assignTask">
     <div class="ul">
        <div class="li" >
            <span style="margin:0 auto">发布任务</span>
        </div>
        <div class="li">
            <div>任务内容</div>
            <div>内容（content）</div>
        </div>
        <div class="li">
            <div>任务开始时间</div>
            <div>时间插件</div>
        </div>
        <div class="li">
            <div>任务结束时间</div>
            <div>时间插件</div>
        </div>
        <div class="li">
            <div>任务接收人</div>
            <div> 人员下拉列表</div>
        </div>
        <div class="li" style="justify-content: space-around;">
            <mt-button size="normal">取消</mt-button>
            <mt-button size="normal">确定</mt-button>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
    },
    components: {

    }
}
</script>

<style lang="stylus" scoped>
.assignTask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0,0,0,0.6)
    z-index 100
.ul
    position fixed
    width 90%
    height 50%
    background #fff
    top 50%
    left 50%
    transform translate(-50%,-50%)
    border #00baad solid 1px
    display flex
    flex-direction column
    box-sizing border-box
    .li
        border-bottom  #00baad solid 1px
        height 16%
        display:flex;
        align-items: center;
        padding 5px
        &:nth-last-child(1)
            height 20%
        div
            border solid 1px #000
            padding 5px
        // div:nth-child(1)
        div:nth-child(2)
            border-left 0

</style>
