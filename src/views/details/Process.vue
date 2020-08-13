<template>
    <!-- 详情进程 -->
    <div class="process">
        <div class="wrap">
            <div class="item">
                <div class="left">
                    <!-- ?????????????????????? -->
                </div>
                <div class="right">
                    <div class="top">
                        <label>准备准备</label>
                        <font class="iconfont icon-wendang">文件</font>
                        <font class="iconfont icon-icon-test">添加</font>
                    </div>
                    <div class="bot">
                        <div class="box">
                            <div class="name">chenyitong</div>
                            <div class="date">2017/21/1</div>
                            <div class="content">
                                这只是个测试哦水水水水水水水水水水水水水水水水水水水
                                水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <!-- ?????????????????????? -->
                </div>
                <div class="right">
                    <div class="top">
                        <label>准备准备</label>
                        <font class="iconfont icon-wendang">文件</font>
                        <font class="iconfont icon-icon-test">添加</font>
                    </div>
                    <div class="bot">
                        <div class="box">
                            <div class="name">chenyitong</div>
                            <div class="date">2017/21/1</div>
                            <div
                                class="content"
                            >这只是个测试哦水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <!-- ?????????????????????? -->
                </div>
                <div class="right">
                    <div class="top">
                        <label>准备准备</label>
                        <font class="iconfont icon-wendang">文件</font>
                        <font class="iconfont icon-icon-test">添加</font>
                    </div>
                    <div class="bot">
                        <div class="box">
                            <div class="name">chenyitong</div>
                            <div class="date">2017/21/1</div>
                            <div class="content">
                                这只是个测试哦水水水水水水水水水水水水水水水水水水水
                                水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <!-- ?????????????????????? -->
                </div>
                <div class="right">
                    <div class="top">
                        <label>准备准备</label>
                        <font class="iconfont icon-wendang">文件</font>
                        <font class="iconfont icon-icon-test">添加</font>
                    </div>
                    <div class="bot">
                        <div class="box">
                            <div class="name">chenyitong</div>
                            <div class="date">2017/21/1</div>
                            <div class="content">
                                这只是个测试哦水水水水水水水水水水水水水水水水水水水
                                水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="left">
                    <!-- ?????????????????????? -->
                </div>
                <div class="right">
                    <div class="top">
                        <label>准备准备</label>
                        <font class="iconfont icon-wendang">文件</font>
                        <font class="iconfont icon-icon-test">添加</font>
                    </div>
                    <div class="bot">
                        <div class="box">
                            <div class="name">chenyitong</div>
                            <div class="date">2017/21/1</div>
                            <div class="content">
                                这只是个测试哦水水水水水水水水水水水水水水水水水水水
                                水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
$color = rgb(0, 186, 173)
.wrap
    position: absolute;
    left: 0;
    right: 0;
    top: 73px;
    bottom: 0;
    overflow: auto;
.process
    background #f7f7f7
    min-height 100vh
.item
    margin-bottom 5px
    display flex
    height 100px
    padding 10px 10px 20px 10px
    border-bottom 1px solid rgb(211,211,211)
    .left
        flex 1
    .right
        flex 6
        .top
            margin-bottom 5px
            label
                font-size 13px
            font
                &:nth-child(2)
                    float right
                    color $color
                    margin-left 20px
                    font-size 12px
                &:nth-child(3)
                    float right
                    color blue
                    font-size 12px
        .bot
            .box
                background #fff
                padding 4px 0 10px 4px
                border-radius 15px
                .name
                    font-size 13px
                    display inline-block
                .date
                    font-size 13px
                    display inline-block
                    float right
                .content
                    font-size 12px
                    color gray
</style>
