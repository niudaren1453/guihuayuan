<template>
    <div class="showInput-tem" v-if="isShow">
        <div class="showInput-box">
            <div class="box-text">
                <mt-field type="textarea" rows="9" placeholder="请输入内容" v-model="text"></mt-field>
            </div>
            <div class="box-btn">
                <mt-button size="normal" @click='cancel'>取消</mt-button>
                <mt-button size="normal" @click='define' >确定</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            text: ''
        }
    },
    props: {
        isShow: Boolean
        // text: String
    },
    components: {},
    methods: {
        define() {
            if (this.text === '') {
                Toast('评论内容不能为空')
                return
            }
            this.$emit('define', this.text)
        },
        cancel() {
            this.text = ''
            this.$emit('cancel')
        }
    }
}

</script>
<style scoped lang='stylus'>
.showInput-tem
    position fixed
    height 100vh
    min-height 100%
    width 100%
    z-index 10
    bottom 0
    left 0
    // display none
    background rgba(0,0,0,0.5)
.showInput-box
    background #fff
    width 80%
    height 40vh
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    border-radius 10px
    .box-text
        width 100%
        height 70%
        overflow hidden
    .box-btn
        width 100%
        display flex
        position absolute
        bottom 0
        button
            flex 1
</style>
