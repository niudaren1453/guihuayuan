<template>
    <div class="task">
        <div class="sort_screen">
            <div class="sort">
                <p>排序</p>
                <font class="iconfont icon-xiajiantou" style="font-size:12px"></font>
            </div>
            <div class="screen">
                <p style="margin-right:5px" @click="handleSetSH">筛选</p>
                <font class="iconfont icon-shaixuan" @click="handleSetSH"></font>
            </div>
        </div>
        <div class="wrap">
            <div class="task-box">
                <div class="box-top">
                    <font class="iconfont icon-gaoxiao"></font>
                    <p>2020-07-01 12:00</p>
                    <p>新建</p>
                </div>
                <div class="box-mid">
                    <p>到现拍几张施工的照片。</p>
                    <font class="iconfont icon-zhuanfa"></font>
                </div>
                <div class="box-bot">
                    <p>张三</p>
                    <font class="iconfont icon-handoup"></font>
                    <p>李四</p>
                    <p>回复</p>
                </div>
            </div>
            <div class="task-box">
                <div class="box-top">
                    <font class="iconfont icon-gaoxiao"></font>
                    <p>2020-07-01 12:00</p>
                    <p>新建</p>
                </div>
                <div class="box-mid">
                    <p>到现拍几张施工的照片。</p>
                    <font class="iconfont icon-zhuanfa"></font>
                </div>
                <div class="box-bot">
                    <p>张三</p>
                    <font class="iconfont icon-handoup"></font>
                    <p>李四</p>
                    <p>回复</p>
                </div>
            </div>
            <div class="task-box">
                <div class="box-top">
                    <font class="iconfont icon-gaoxiao"></font>
                    <p>2020-07-01 12:00</p>
                    <p>新建</p>
                </div>
                <div class="box-mid">
                    <p>到现拍几张施工的照片。</p>
                    <font class="iconfont icon-zhuanfa"></font>
                </div>
                <div class="box-bot">
                    <p>张三</p>
                    <font class="iconfont icon-handoup"></font>
                    <p>李四</p>
                    <p>回复</p>
                </div>
            </div>
            <div class="task-box">
                <div class="box-top">
                    <font class="iconfont icon-gaoxiao"></font>
                    <p>2020-07-01 12:00</p>
                    <p>新建</p>
                </div>
                <div class="box-mid">
                    <p>到现拍几张施工的照片。</p>
                    <font class="iconfont icon-zhuanfa"></font>
                </div>
                <div class="box-bot">
                    <p>张三</p>
                    <font class="iconfont icon-handoup"></font>
                    <p>李四</p>
                    <p>回复</p>
                </div>
            </div>
            <div class="task-box">
                <div class="box-top">
                    <font class="iconfont icon-gaoxiao"></font>
                    <p>2020-07-01 12:00</p>
                    <p>新建</p>
                </div>
                <div class="box-mid">
                    <p>到现拍几张施工的照片。</p>
                    <font class="iconfont icon-zhuanfa"></font>
                </div>
                <div class="box-bot">
                    <p>张三</p>
                    <font class="iconfont icon-handoup"></font>
                    <p>李四</p>
                    <p>回复</p>
                </div>
            </div>
            <div class="task-box">
                <div class="box-top">
                    <font class="iconfont icon-gaoxiao"></font>
                    <p>2020-07-01 12:00</p>
                    <p>新建</p>
                </div>
                <div class="box-mid">
                    <p>到现拍几张施工的照片。</p>
                    <font class="iconfont icon-zhuanfa"></font>
                </div>
                <div class="box-bot">
                    <p>张三</p>
                    <font class="iconfont icon-handoup"></font>
                    <p>李四</p>
                    <p>回复</p>
                </div>
            </div>
            <div class="task-box">
                <div class="box-top">
                    <font class="iconfont icon-gaoxiao"></font>
                    <p>2020-07-01 12:00</p>
                    <p>新建</p>
                </div>
                <div class="box-mid">
                    <p>到现拍几张施工的照片。</p>
                    <font class="iconfont icon-zhuanfa"></font>
                </div>
                <div class="box-bot">
                    <p>张三</p>
                    <font class="iconfont icon-handoup"></font>
                    <p>李四</p>
                    <p>回复</p>
                </div>
            </div>
            <div class="task-box">
                <div class="box-top">
                    <font class="iconfont icon-gaoxiao"></font>
                    <p>2020-07-01 12:00</p>
                    <p>新建</p>
                </div>
                <div class="box-mid">
                    <p>到现拍几张施工的照片。</p>
                    <font class="iconfont icon-zhuanfa"></font>
                </div>
                <div class="box-bot">
                    <p>张三</p>
                    <font class="iconfont icon-handoup"></font>
                    <p>李四</p>
                    <p>回复</p>
                </div>
            </div>
        </div>
        <div class="screen-container" :class="activeClass ? 'animation_show':'animation_hide'">
            <div class="screen-box">
                <div class="search">
                    <div class="search-box">
                        <input type="text" placeholder="搜索" />
                        <font class="iconfont icon-search"></font>
                    </div>
                </div>
                <div class="state item">
                    <div class="title">状态</div>
                    <ul class="btn-box">
                        <li>
                            <p>新建</p>
                        </li>
                        <li>
                            <p>进行中</p>
                        </li>
                        <li>
                            <p>完结</p>
                        </li>
                    </ul>
                </div>
                <div class="priority item">
                    <div class="title">优先级</div>
                    <ul class="btn-box">
                        <li>
                            <p>高</p>
                        </li>
                        <li>
                            <p>中</p>
                        </li>
                        <li>
                            <p>低</p>
                        </li>
                    </ul>
                </div>
                <div class="assign item">
                    <div class="title">指派人</div>
                    <ul class="btn-box">
                        <li>
                            <p>张三</p>
                        </li>
                        <li>
                            <p>李四</p>
                        </li>
                        <li>
                            <p>王五</p>
                        </li>
                        <li>
                            <p>铁六</p>
                        </li>
                    </ul>
                </div>
                <div class="creator item">
                    <div class="title">创建人</div>
                    <ul class="btn-box">
                        <li>
                            <p>张三</p>
                        </li>
                        <li>
                            <p>李四</p>
                        </li>
                        <li>
                            <p>王五</p>
                        </li>
                        <li>
                            <p>铁六</p>
                        </li>
                    </ul>
                </div>
                <div class="handle-btn">
                    <div class="result" @click="handleResult">重置</div>
                    <div class="submit" @click="handleSubmit">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeClass: false
        }
    },
    components: {},
    methods: {
        // 点击显示
        handleSetSH() {
            this.activeClass = true
        },
        // 重置
        handleResult() {
            this.activeClass = !this.activeClass
        },
        // 确定按钮
        handleSubmit() {
            this.activeClass = !this.activeClass
        }
    }
}
</script>

<style lang="stylus" scoped>
// btn重置提交
.handle-btn
    position absolute
    bottom 0
    width 100%
    height 40px
    display flex
    justify-content center
    align-items center
    .result
        flex 1
        height 100%
        text-align center
        line-height 200%
        background rgb(255, 141, 26)
        font-weight 550
        font-size 18px
        color #fff
    .submit
        flex 1
        height 100%
        text-align center
        line-height 200%
        font-weight 550
        font-size 18px
        background rgb(165, 214, 63)
        color #fff
// 动画
.animation_show
    transform translateX(0)
    transition 0.2s
.animation_hide
    transform translateX(-110%)
    transition 0.2s
$bg1 = rgba(246, 246, 246, 0.6)
.task
    background rgb(247, 247, 247)
    min-height 100vh
.wrap
    position absolute
    left 0
    right 0
    top 111px
    bottom 0
    overflow auto
flex()
    flex 1
    display flex
    align-items center
    position relative
absolute(color)
    color color
    position absolute
    right 0
    margin-right 10px
.sort_screen
    display flex
    justify-items center
    height 40px
    font-size 13px
    background rgb(247, 247, 247)
    &>div
        flex 1
        display flex
        align-items center
    .sort
        justify-content space-around
    .screen
        justify-content flex-end
.task-box
    margin-bottom 5px
    background #ffffff
    height 65px
    border-top 1px solid rgb(216, 216, 216)
    border-bottom 1px solid rgb(216, 216, 216)
    .box-top
        flex()
        .iconfont
            margin 0 5px 0 10px
        p
            font-size 12px
            &:nth-child(3)
                absolute(blue)
    .box-mid
        flex()
        padding-left 20px
        p
            font-size 14px
        .iconfont
            absolute(red)
    .box-bot
        flex()
        font-size 13px
        padding-left 17px
        color gray
        p
            &:nth-child(4)
                absolute(red)
                font-size 12px
        .iconfont
            font-size 18px
.screen-container
    background $bg1
    position absolute
    top 40px
    right 0
    // width 65%
    width 100%
    height calc(100vh - 40px)
    z-index 1
    .screen-box
        position absolute
        background #fff
        right 0
        width 65%
        height calc(100vh - 40px)
        padding 0 5px
        .search
            height 30px
            .search-box
                background $bg1
                width 100%
                height 20px
                border-radius 5px
                input
                    float right
                    background $bg1
                    border none
                    width 50%
                    font-size 14px
                    border-radius 5px
                    outline none
                .iconfont
                    float right
        .item
            border-top 2px solid rgb(222, 222, 222)
            margin-bottom 5px
            .title
                height 20px
                width 100%
                color gray
            .btn-box
                width 100%
                display flex
                flex-wrap wrap
                text-align center
                &>li
                    width 33%
                    border-radius 15px
                    text-align center
                    display flex
                    height 30px
                    margin-top 10px
                    &>p
                        width 80%
                        border 1px solid rgb(211, 211, 211)
                        border-radius 15px
</style>
