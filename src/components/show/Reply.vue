<template>
    <div class="reply-tem" v-if="isShow">
        <div class="reply-box">
            <div class="box-text">
                <mt-field type="textarea" rows="9" placeholder="请输入回复内容" v-model="text"></mt-field>
            </div>
            <div class="box-btn">
                <mt-button size="normal" @click='hideBox'>取消</mt-button>
                <mt-button size="normal" @click='sendReply' >确定</mt-button>
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
        isShow: Boolean,
        id: Number
        // text: String
    },
    components: {},
    methods: {
        hideBox() {
            this.text = ''
            this.$emit('hideBox')
        },
        sendReply() {
            if (this.text === '') {
                Toast('评论内容不能为空')
                return
            }
            const commentContent = this.text
            const params = {
                commentContent
            }
            this.$axios.post('http://58.22.125.43:8888/comment/addComment?phone=' + this.$store.state.phone + '&id=' + this.id, params).then((res) => {
                Toast(res.data.message)
                this.hideBox()
                // console.log(res)
                // 考虑到名字拿不到 头像拿不到的因素，缓存难度大
                // 固重新请求一次数据把
            })
        }
        // handleSendReply() {
        //     this.flag = false
        //     this.$router.push({ path: '/index' })
        // }
    }
}

</script>
<style scoped lang='stylus'>
.reply-tem
    position fixed
    height 100vh
    min-height 100%
    width 100%
    z-index 10
    bottom 0
    left 0
    // display none
    background rgba(0,0,0,0.5)
.reply-box
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
