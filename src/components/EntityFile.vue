<template>
    <div class="entityfile-tem">
        <div v-for="(item, index) in items" :key="index">
            <!-- class="hideContent" -->
            <!-- :ref="'ref'+index" -->
            <div class="headerBox" @click="showContent(index),checkChiFile(item.id,item.panduandedongxi)">
                <div>{{item.title}}</div>
                <i class="iconfont" :class="item.ishidden?'icon-xiajiantou':'icon-xiangshang'"></i>
            </div>

            <!-- 2  -->
            <template v-if="item.ishidden">
                <!-- 添加子文件夹按钮 -->
                <div style="position:relative;height:40px">
                    <div class='add-chi-btn'
                    @click="handleShowAddChiFile(index + 1)">+</div>  <!--后台需要传的是数组下标加1 -->
                </div>
                <!-- 父文件夹下的东西↓ -->
                <div class="item" v-for="(item2, index2) in item.date" :key="index2">
                    <div class="title">{{item2.title}}</div>
                    <div class="content-item">
                        <div class="left">
                            <!-- <img :src="item.qrcodeImageUrl" /> -->
                            <img :src="item2.fileImgSrc" />
                        </div>
                        <div class="right">
                            <div class="filename">{{item2.fileName}}</div>
                            <div class="content">
                                <div class="date_name">
                                    <div>{{item2.uploadTime}}</div>
                                    <div>{{item2.uploadPerson}}</div>
                                </div>
                                <div :class="item2.fileLock=='1'?'btn-ul-lock':'btn-ul'">
                                    <!--  @click="handleShowImg(item2.qrcodeImageUrl)" ↓ -->
                                    <router-link
                                        tag="div"
                                        :to="{name:'task',query:{id:item2.id}}"
                                        class="btn-li"
                                    >
                                        <i class="iconfont icon-wendang"></i>
                                        <div>任务列表</div>
                                    </router-link>
                                    <div class="btn-li">
                                        <i class="iconfont icon-wendang"></i>
                                        <a :href="item2.fileUrl">
                                            <div>下载</div>
                                        </a>
                                    </div>
                                    <router-link
                                        tag="div"
                                        :to="{name:'log',query:{id:item2.id}}"
                                        class="btn-li"
                                    >
                                        <i class="iconfont icon-wendang"></i>
                                        <div>日志</div>
                                    </router-link>
                                    <div class="btn-li" @click="handleShowReplyItem(index,index2)">
                                        <i class="iconfont icon-wendang"></i>
                                        <div>评论</div>
                                    </div>
                                    <div
                                        class="btn-li"
                                        @click="handleLockFile(index,index2,item2.id)"
                                    >
                                        <i class="iconfont icon-wendang"></i>
                                        <div>锁定文件</div>
                                    </div>
                                    <!-- 纱布 -->
                                    <div class="gauze" v-if="item2.fileLock == '1'"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 判断来显示渲染评论 -->
                    <div class="file-item" v-if="item2.isShowComment">
                        <div class="action-btn">
                            <mt-button @click.native="handleShowReply(item2.id)" size="normal">评论</mt-button>
                        </div>
                        <!-- 3 -->
                        <div
                            class="file-content file-child"
                            v-for="(item3, index3) in item2.listComment"
                            :key="index3"
                        >
                            <div class="file-left">
                                <!-- <img src /> -->
                            </div>
                            <div class="file-mid">
                                <div class="mid-top">
                                    <p>{{item3.commentContent}}</p>
                                </div>
                                <div class="mid-bot">
                                    <p>{{item3.commentProson}}</p>&nbsp;&nbsp;
                                    <p style="margin-left: 10px">评论时间：{{item3.commentTime}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 子文件夹    -->
                <div
                    v-for="(chiItem, index4) in item.sonFile"
                    :key="'fileson'+
                index4">
                    <div class="chi-headerBox headerBox" @click="showChiContent(index,index4)">
                        <!-- 子文件夹方法，显示子文件内容 -->
                        <div>{{chiItem.sonFile}}</div>
                        <i
                            class="iconfont"
                            :class="chiItem.filehidden?'icon-xiajiantou':'icon-xiangshang'"
                        ></i>
                    </div>
                    <!-- 子文件夹文件 -->
                    <template v-if="chiItem.filehidden">
                        <div class="item" v-for="(chiFileItem, index5) in chiItem.file" :key="index5">
                            <template v-if="chiFileItem.fileName!= '假文件'">
                                <div class="title">{{chiFileItem.title}}</div>
                                <div class="content-item">
                                    <div class="left">
                                        <!-- <img :src="item.qrcodeImageUrl" /> -->
                                        <img :src="chiFileItem.fileImgSrc" />
                                    </div>
                                    <div class="right">
                                        <div class="filename">{{chiFileItem.fileName}}</div>
                                        <div class="content">
                                            <div class="date_name">
                                                <div>{{chiFileItem.uploadTime}}</div>
                                                <div>{{chiFileItem.uploadPerson}}</div>
                                            </div>
                                            <div :class="chiFileItem.fileLock=='1'?'btn-ul-lock':'btn-ul'">
                                                <!--  @click="handleShowImg(chiFileItem.qrcodeImageUrl)" ↓ -->
                                                <router-link
                                                    tag="div"
                                                    :to="{name:'task',query:{id:chiFileItem.id}}"
                                                    class="btn-li"
                                                >
                                                    <i class="iconfont icon-wendang"></i>
                                                    <div>任务列表</div>
                                                </router-link>
                                                <div class="btn-li">
                                                    <i class="iconfont icon-wendang"></i>
                                                    <a :href="chiFileItem.fileUrl">
                                                        <div>下载</div>
                                                    </a>
                                                </div>
                                                <router-link
                                                    tag="div"
                                                    :to="{name:'log',query:{id:chiFileItem.id}}"
                                                    class="btn-li"
                                                >
                                                    <i class="iconfont icon-wendang"></i>
                                                    <div>日志</div>
                                                </router-link>
                                                <div
                                                    class="btn-li"
                                                    @click="handleShowChiReplyItem(index,index4,index5)"
                                                >
                                                    <i class="iconfont icon-wendang"></i>
                                                    <div>评论</div>
                                                </div>
                                                <div
                                                    class="btn-li"
                                                    @click="handleLockChiFile(index,index4,index5,chiFileItem.id)"
                                                >
                                                    <i class="iconfont icon-wendang"></i>
                                                    <div>锁定文件</div>
                                                </div>
                                                <!-- 纱布 -->
                                                <div class="gauze" v-if="chiFileItem.fileLock == '1'"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 判断来显示渲染评论 -->
                                </div>
                                <div class="file-item" v-if="chiFileItem.ishiddencomment">
                                    <div class="action-btn">
                                        <mt-button
                                            @click.native="handleShowReply(chiFileItem.id)"
                                            size="normal"
                                        >评论</mt-button>
                                    </div>
                                    <!-- 3 -->
                                    <Comments :id="chiFileItem.id"></Comments>
                                </div>
                             </template>
                        </div>
                    </template>
                </div>
            </template>
        </div>
        <Reply :isShow="isShowReply" v-on:hideBox="hideBox" :id="id" />
    </div>
</template>

<script>
import Reply from './show/Reply'
import Comments from './show/Comments'
import { Toast, MessageBox } from 'mint-ui'

export default {
    name: 'EntityFile',
    data() {
        return {
            id: 0, // 传给组件show/Reply 的id
            isShowReply: false
        }
    },
    props: {
        items: Array
    },
    components: {
        Reply,
        Comments
    },
    methods: {
        /* 2020/8/24
            niu
            客户需求更改 固作废
        */
        // 二维码
        // handleShowImg(e) {
        //     this.$emit('handleShowImg', e)
        // },
        handleShowReplyItem(e1, e2) {
            // 两个祖先级的索引
            const e = e1 + '.' + e2
            this.$emit('handleShowReplyItem', e)
        },
        handleShowChiReplyItem(e1, e2, e3) {
            const e = e1 + '.' + e2 + '.' + e3
            this.$emit('handleShowChiReplyItem', e)
        },
        // 折叠
        showContent(index) {
            // this.$emit('showContent', index)
            // 由于是在store写的！！不推荐直接更改state数据
            console.log(this.$store.state.informationList[index])
            this.$store.state.informationList[index].ishidden = !this.$store
                .state.informationList[index].ishidden
        },
        // 是否折叠子文件夹文件
        showChiContent(index1, index2) {
            this.$store.state.informationList[index1].sonFile[index2].filehidden = !this.$store.state.informationList[index1].sonFile[index2].filehidden
        }, // 判断是否有子文件
        checkChiFile() {
            // 如果有拿到id什么的再做一次请求
        },
        // 添加子文件夹的方法
        handleShowAddChiFile(index) {
            // console.log(index)
            this.$emit('handleShowAddChiFile', index)
        },
        // 添加子文件夹窗口的方法
        hiddenShowInput() {
            this.isShowInput = false
        },
        // 评论
        handleShowReply(e) {
            this.isShowReply = true
            this.id = e
        },
        hideBox(e) {
            this.isShowReply = false
        },
        // 锁定文件
        handleLockFile(index1, index2, e) {
            MessageBox({
                title: '提示',
                message: '确定执行此操作?',
                showCancelButton: true
            }).then((action) => {
                if (action === 'confirm') {
                    this.$axios(
                        'http://58.22.125.43:8888/file/fileLock/' + e
                    ).then((res) => {
                        console.log(res)
                        if (res.data.flag === true) {
                            Toast(res.data.message)
                            // 更改当前选定的变色
                            console.log(index1)
                            console.log(index2)
                            this.$store.state.informationList[index1].date[
                                index2
                            ].fileLock = '1'
                            console.log(
                                this.$store.state.informationList[index1].date[
                                    index2
                                ]
                            )
                        } else {
                            Toast('文件锁定失败')
                        }
                        // 根据返回的东西进行判断是否锁定文件成功
                    })
                }
            })
        },
        // 锁定子文件夹文件
        handleLockChiFile(index1, index2, index3, e) {
            MessageBox({
                title: '提示',
                message: '确定执行此操作?',
                showCancelButton: true
            }).then((action) => {
                if (action === 'confirm') {
                    this.$axios(
                        'http://58.22.125.43:8888/file/fileLock/' + e
                    ).then((res) => {
                        console.log(res)
                        if (res.data.flag === true) {
                            Toast(res.data.message)
                            // 更改当前选定的变色
                            console.log(index1)
                            console.log(index2)
                            console.log(index3)
                            this.$store.state.informationList[index1].sonFile[
                                index2
                            ].file[index3].fileLock = 1
                        } else {
                            Toast('文件锁定失败')
                        }
                        // 根据返回的东西进行判断是否锁定文件成功
                    })
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.headerBox {
    background: rgba(211, 244, 244, 0.8);
    color: #000;
    height: 40px;
    width: 100%;
    line-height: 40px;
    font-size: 18px;
    display: flex;
    overflow: hidden;

    div {
        margin-left: 10px;
    }
}

.chi-headerBox {
    width: 80%;
    padding-left: 50px;
    margin: 0 auto;
    font-size: 16px;
    background: rgba(244, 244, 244, 0.5);
}
.add-chi-btn{ // 添加子文件夹按钮
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 25px;
    width: 25px;
    right: 20px;
    top: 2.75px;
    font-size: 24px;
    border-radius: 50%;
    padding: 5px;
    color: #008080;
    background: rgba(211,211,211,0.8);
}
.item {
    padding: 0 10px;
    .title {
    }

    .content-item {
        border-top: 2px solid rgb(231, 231, 231);
        // border-bottom: 2px solid rgb(231, 231, 231);
        display: flex;

        .left {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;

            img {
                height: 40px;
                width: 40px;
            }
        }

        .right {
            flex: 6;
            display: flex;
            height: 50px;
            flex-direction: column;
            color: gray;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            .filename {
                font-size: 12px;
            }

            .content {
                flex: 1;
                flex-direction: row;
                display: flex;
            }

            .date_name {
                flex: 1;
                display: flex;
                width: 50%;
                flex-direction: column;
                font-size: 12px;
            }

            .btn-ul {
                flex: 1;
                display: flex;
                width: 50%;
                font-size: 11px;
                color: gray;
                overflow-y: hidden;
                position: relative;
                overflow-y: hidden;

                .btn-li {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                    justify-content: center;

                    &:nth-child(1) {
                        color: red;
                    }

                    &:nth-child(2) {
                        color: green;
                    }

                    &:nth-child(3) {
                        color: blue;
                    }

                    &:nth-child(4) {
                        color: teal;
                    }
                }
            }

            .btn-ul-lock {
                flex: 1;
                display: flex;
                width: 50%;
                font-size: 11px;
                color: gray;
                position: relative;

                .btn-li {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }
            }
        }
    }
}

.main-reply {
    width: 100%;
    display: flex;
    height: 50px;

    .left {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 40px;
            width: 40px;
        }
    }

    .mid {
        flex: 2;
    }

    .right {
        flex: 4;
    }
}

.hideContent {
    height: 40px;
    overflow: hidden;
}

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

.lock-color {
    color: gray;
}
</style>
