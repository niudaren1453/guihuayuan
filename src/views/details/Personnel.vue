<template>
    <div class="Personnel-container">
        <div class="wrap">
            <div class="item">
                <div class="name">
                    <img src />
                    <p>张三</p>
                </div>
                <div class="occupation">总经理</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>李四</p>
                </div>
                <div class="occupation">大堂经理</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
            <div class="item">
                <div class="name">
                    <img src />
                    <p>王五</p>
                </div>
                <div class="occupation">码奴</div>
            </div>
        </div>
    </div>
</template>

<script>
// export default {
//     data() {
//         return {}
//     },
//     components: {}
// }
</script>

<style lang="stylus" scoped>
.Personnel-container
    background #f7f7f7
    min-height 100vh
.wrap
    position absolute
    left 0
    right 0
    top 73px
    bottom 0
    overflow auto
.item
    padding 5px 10px
    display flex
    color gray
    align-items center
    border-bottom 1px solid rgb(211, 211, 211)
    background #fff
    .name
        flex 1
        font-size 14px
        display flex
        align-items center
        img
            width 40px
            height 40px
            border-radius 50%
            margin-right 5px
    .occupation
        flex 1
        text-align right
        font-size 13px
</style>