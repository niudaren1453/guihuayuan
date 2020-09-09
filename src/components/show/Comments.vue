<template>
    <div>
        <div
        class="file-content file-child"
        v-for="(chiFileCommitItem, index3) in listComment"
        :key="index3"
    >
        <div class="file-left">
            <!-- <img src /> -->
        </div>
        <div class="file-mid">
            <div class="mid-top">
                <p>{{chiFileCommitItem.commentContent}}</p>
            </div>
            <div class="mid-bot">
                <p>{{chiFileCommitItem.commentProson}}</p>&nbsp;&nbsp;
                <p
                    style="margin-left: 10px"
                >评论时间：{{chiFileCommitItem.commentTime}}</p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listComment: []
        }
    },
    props: {
        id: Number
    },
    components: {},
    mounted() {
        this.$axios.post('http://58.22.125.43:8888/comment/getCommentByFileId/' + this.id).then((res) => {
            this.listComment = res.data.commentList
        })
    },
    methods: {
        // hideBox() {
        //     this.text = ''
        //     this.$emit('hideBox')
        // },
        // sendReply() {
        //     if (this.text === '') {
        //         Toast('评论内容不能为空')
        //         return
        //     }
        //     const commentContent = this.text
        //     const params = {
        //         commentContent
        //     }
        //     console.log(this.id)
        //     this.$axios.post('http://58.22.125.43:8888/comment/addComment?phone=' + this.$store.state.phone + '&id=' + this.id, params).then((res) => {
        //         Toast(res.data.message)
        //         this.hideBox()
        //         setTimeout(() => {
        //             this.$router.go(0)
        //         }, 1500)
        //     })
        // }
    }
}

</script>
<style scoped lang='stylus'>
// 子评论内容
.file-item {
    // position relative
    width: 100%;

    // border-bottom 4px solid rgb(231, 231, 231)
    .action-btn {
        display: flex;
        justify-content: flex-end;
    }

    .file-type {
        position: absolute;
        right: 35px;
        color: #fff;
        font-size: 13px;
        transform: translateY(-100%);

        p {
            background: $color;
            text-align: center;
            padding: 0 8px;
        }
    }

    .file-content {
        // margin-top 15px
        display: flex;
        height: 50px;

        .file-left {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 35px;
                height: 35px;
                border-radius: 50%;
            }
        }

        .file-mid {
            flex: 4;
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .mid-top {
                flex: 1;
                width: 100%;
                font-size: 15px;

                p {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .mid-bot {
                flex: 1;
                display: flex;
                font-size: 12px;
                color: gray;
                overflow: hidden;
                // justify-content: space-around;
            }
        }

        .file-right {
            flex: 1;
            position: relative;

            p {
                width: 40px;
                background: $color;
                color: #ffffff;
                position: absolute;
                right: 20px;
                bottom: 10px;
                text-align: center;
                font-size: 12px;
            }
        }
    }

    .file-child {
        border-top: 1px solid rgb(231, 231, 231);

        .file-left {
            // flex: 3;
            flex: 1;
            justify-content: flex-end;
            margin-right: 10px;
        }

        .file-mid {
            // flex: 9;
            flex: 20;
        }

        .file-right {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            div {
                margin-top: 2px;
                color: #fff;
                background: #00baad;
                padding: 2px 5px;
            }
        }
    }
}
</style>
