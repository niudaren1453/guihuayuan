<template>
    <div class="entityfile">
        <div class="wrap">
            <EntityFile :items = "list"/>
        </div>
    </div>
</template>

<script>
import EntityFile from '@/components/EntityFile'
export default {
    data() {
        return {
            list: [
                {
                    title: '这是合同',
                    filename: '文件名字',
                    name: '合同人姓名',
                    date: '2020-06-08'
                },
                {
                    title: '这是合同',
                    filename: '文件名字',
                    name: '码农姓名',
                    date: '2017-06-06'
                },
                {
                    title: '合同',
                    filename: '文件名字',
                    name: '张召忠',
                    date: '2017-06-06'
                },
                {
                    title: '电子合同',
                    filename: '文件名字',
                    name: '张召忠',
                    date: '2017-06-06'
                },
                {
                    title: '电子合同',
                    filename: '文件名字',
                    name: '张召忠',
                    date: '2017-06-06'
                },
                {
                    title: '论计算机',
                    filename: '文件名字',
                    name: '张召忠',
                    date: '2017-06-06'
                }

            ]
        }
    },
    components: {
        EntityFile
    }
}
</script>

<style lang="stylus" scoped>
.wrap
    position absolute
    left 0
    right 0
    top 40px
    bottom 0
    overflow auto
.item
    padding 0 10px
    border-bottom 2px solid rgb(231, 231, 231)
    .title
        padding 5px 0
        font-size 12px
        color gray
        font-weight bold
    .content-item
        border-bottom 1px solid rgb(231, 231, 231)
        display flex
        .left
            flex 1
            display flex
            justify-content center
            align-items center
            height 50px
            img
                height 40px
                width 40px
        .right
            flex 6
            display flex
            height 50px
            flex-direction column
            color gray
            font-size 14px
            .filename
                font-size 12px
            .content
                flex 1
                flex-direction row
                display flex
            .date_name
                flex 1
                display flex
                width 50%
                flex-direction column
                font-size 12px
            .btn-ul
                flex 1
                display flex
                width 50%
                font-size 11px
                .btn-li
                    flex 1
                    display flex
                    flex-direction column
                    text-align center
</style>