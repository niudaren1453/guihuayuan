<template>
    <div class="electronicsFile-container">
        <div class="wrap">
            <div class="file-item" v-for="(item, index) in items1" :key="index">
                <div class="file-type">
                    <p>{{item.filetype}}</p>
                </div>
                <div class="file-content">
                    <div class="file-left">
                        <img src />
                    </div>
                    <div class="file-mid">
                        <div class="mid-top">
                            <p>{{item.title}}</p>
                        </div>
                        <div class="mid-bot">
                            <p>{{item.name}}</p>
                            <p>上传时间：{{item.date}}</p>
                        </div>
                    </div>
                    <div class="file-right">
                        <p>回复</p>
                    </div>
                </div>
                <div class="file-content file-child" v-for="(item2, index2) in item.childrenReply" :key="index2">
                    <div class="file-left">
                        <img src />
                    </div>
                    <div class="file-mid">
                        <div class="mid-top">
                            <p>{{item2.title}}</p>
                        </div>
                        <div class="mid-bot">
                            <p>{{item2.name}}</p>
                            <p style="margin:0 5px;">上传时间：{{item2.date}}</p>
                        </div>
                    </div>
                    <div class="file-right">
                        <p>回复</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items1: [
                {
                    img: '',
                    filetype: '委托书', // 1 2 3 4
                    title: '今天应该去敲代码,多多搬砖',
                    name: '牛三',
                    date: '2020/7/9',
                    childrenReply: [
                        {
                            img: '',
                            title: '今天应该去敲代码,多多搬砖',
                            name: '牛四',
                            date: '2020/7/9'
                        },
                        {
                            img: '',
                            title: '今天敲完代码了',
                            name: '牛五',
                            date: '2020/7/9'
                        }
                    ]
                },
                {
                    img: '',
                    filetype: '通知书', // 1 2 3 4
                    title: '今天应该去敲代码,多多搬砖',
                    name: '牛三',
                    date: '2020/7/9',
                    childrenReply: [
                        {
                            img: '',
                            title: '今天应该去敲代码,多多搬砖',
                            name: '牛四',
                            date: '2020/7/9'
                        }
                    ]
                },
                {
                    img: '',
                    filetype: '电子书', // 1 2 3 4
                    title: '今天应该去敲代码,多多搬砖',
                    name: '牛三',
                    date: '2020/7/9'
                }
            ]
        }
    },
    components: {}
}
</script>

<style lang="stylus" scoped>
$color = rgb(0, 186, 173)
.wrap
    position absolute
    left 0
    right 0
    top 40px
    bottom 0
    overflow auto
.file-item
    // position relative
    width 100%
    border-bottom 4px solid rgb(231, 231, 231)
    .file-type
        position absolute
        right 35px
        color #fff
        font-size 13px
        transform translateY(-100%)
        p
            background $color
            text-align center
            padding 0 8px
    .file-content
        margin-top 15px
        display flex
        height 65px
        .file-left
            flex 1
            display flex
            justify-content center
            align-items center
            img
                width 35px
                height 35px
                border-radius 50%
        .file-mid
            flex 4
            display flex
            flex-direction column
            overflow hidden
            .mid-top
                flex 1
                width 100%
                font-size 15px
                p
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
            .mid-bot
                flex 1
                display flex
                font-size 12px
                color gray
                overflow hidden
                justify-content space-around
        .file-right
            flex 1
            position relative
            p
                width 40px
                background $color
                color #ffffff
                position absolute
                right 20px
                bottom 10px
                text-align center
                font-size 12px
    .file-child
        border-top 1px solid rgb(231, 231, 231)
        .file-left
            flex 3
            justify-content flex-end
            margin-right 10px
        .file-mid
            flex 9
        .file-right
            flex 2
</style>