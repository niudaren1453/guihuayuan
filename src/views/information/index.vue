<template>
    <div class="Infomation">
        <mt-header title="项目">
            <mt-button icon="back" slot="left" @click="back"></mt-button>
        </mt-header>
        <!-- <NewAdd></NewAdd> -->
        <nav>
            <ProjectNav v-on:getInfo="getInfo" :list="items" />
        </nav>
        <main class="wrap">
            <!-- 暂且分为两中一个是分页时候的状态，一个非分页时候的状态 -->
            <template v-if="nowPosition===0">
                <!-- 以下分为2种情况 一个是非更多的内容 ,还有一个是更多的内容 -->
                <EntityFile :items= this.$store.state.informationList v-on:handleShowImg="handleShowImg"
                v-on:handleShowReplyItem="handleShowReplyItem" v-if='isEntityFile'></EntityFile>
                <!-- v-on:showContent='showContent' -->
                <div v-else>
                    <mt-navbar v-model="selected">
                        <mt-tab-item id="1">发布任务 </mt-tab-item>
                        <mt-tab-item id="2" >项目星标</mt-tab-item>
                        <mt-tab-item id="3">项目归档</mt-tab-item>
                        <mt-tab-item id="4">修改项目名</mt-tab-item>
                        <mt-tab-item id="5">任务列表</mt-tab-item>

                    </mt-navbar>
                    <!-- <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        我是发布的内容
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        {{star}}
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                        {{file}}
                    </mt-tab-container-item>
                </mt-tab-container> -->
                </div>
            </template>
            <!-- 分页时候的页面展示 -->
            <template v-else-if="nowPosition===1">
                <!-- 排版 先search    再content      再page -->
                <!-- search -->
                <!-- <Niusearch
                v-on:handleSearch='handleSearch'/> -->
                    <!-- content -->
                    <div class="content wrap1" >
                        <div class="item" v-for="(item, index) in searchList" :key="index" >
                        <div class="title">{{item.title}}</div>
                        <div class="content-item">
                            <div class="left">
                                <!-- <img :src="item.qrcodeImageUrl" /> -->
                                <img :src='item.fileImgSrc' />
                            </div>
                            <div class="right">
                                <div class="filename">{{item.fileName}}</div>
                                <div class="content">
                                    <div class="date_name">
                                        <div>{{item.uploadTime}}</div>
                                        <div>{{item.uploadPerson}}</div>
                                    </div>
                                    <div :class="item.fileLock=='1'?'btn-ul-lock':'btn-ul'">
                                        <div class="btn-li" >  <!-- @click="handleShowImg(item.qrcodeImageUrl)"-->
                                            <i class="iconfont icon-wendang" ></i>
                                            <div>任务列表</div>
                                        </div>
                                        <div class="btn-li">
                                            <i class="iconfont icon-wendang"></i>
                                            <a :href="item.fileUrl">
                                                <div>下载</div>
                                            </a>
                                        </div>
                                        <router-link :to="{name:'log',query:{id:item.id}}" class="btn-li">
                                            <i class="iconfont icon-wendang"></i>
                                            <div>日志</div>
                                        </router-link>
                                        <div class="btn-li"> <!-- @click="handleLockFile(index,index2,item.id)-->
                                            <i class="iconfont icon-wendang"></i>
                                        <div>锁定文件</div>
                                        </div>
                                        <!-- 纱布 -->
                                        <div class="gauze" v-if="item.fileLock == '1'"> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <!-- <template v-if="searchList.length===0">
                            <div>请搜索数据 </div>
                        </template>
                        <template v-else>
                            <div>内容</div>
                        </template> -->
                    </div>
                    <!-- page -->
                    <Niupage :pages='pages' v-on:handleCurrentChange='handleCurrentChange' style="position:absolute; bottom:0;    left: 50%;
                    transform: translateX(-50%);" />
            </template>
        </main>
        <footer>
            <router-link tag="div" :to="{name:'uploadFile',query:{id:id,typeId:typeId}}">+</router-link>
        </footer>
        <!-- 用来显示二维码的组件 -->
        <ShowImg :ShowImg="ShowImg" :ImgCode="ImgCode" v-on:handleHideImg="handleHideImg" />
        <!-- 发布任务组件 -->
        <AssignTask v-if='assign.isShow'> </AssignTask>
    </div>
</template>

<script>
// import Niusearch from '@/components/common/n-search'
import Niupage from '@/components/common/n-page'
import { Toast, MessageBox } from 'mint-ui'
import ProjectNav from './ProjectNav'
// import NewAdd from '@/components/NewAdd'
import EntityFile from '@/components/EntityFile'
import ShowImg from '@/components/show/ShowImg'
// import ProjectApproval from '../components/ProjectApproval'
import AssignTask from './components/AssignTask'
export default {
    data() {
        return {
            id: 1, // id
            typeId: 1, // 当前类型id    未使用
            // address: ['electronicsfile1', 'electronicsfile2'],
            ShowImg: false, // 是否二维码显示
            isEntityFile: true, // 是否隐藏entityfile
            nowPosition: 1, // 当前的位置 0 是分页 1是非分页 2待定
            selected: 0, // 更多内容tab使用
            ImgCode: '', // 二维码的code
            // more 使用
            file: '', // 归档字符
            star: '', // 星标字符
            // -----------
            items: [ // projectNav的数组
                {
                    id: 1,
                    color: 'red',
                    title: '立项文件',
                    notice: true,
                    isColor: false,
                    noticeNum: 2
                },
                {
                    id: 2,
                    color: 'blue',
                    title: '基础资料',
                    notice: false,
                    isColor: false
                },
                {
                    id: 3,
                    color: 'green',
                    title: '现场照片',
                    notice: false,
                    isColor: false
                },
                {
                    id: 4,
                    color: 'teal',
                    title: '设计文件',
                    notice: false,
                    isColor: false
                },
                {
                    id: 5,
                    color: 'red',
                    title: '批复文件',
                    notice: false,
                    isColor: false
                },
                {
                    id: 6,
                    color: 'blue',
                    title: '往来函件',
                    notice: false,
                    isColor: false
                },
                {
                    id: 7,
                    color: 'green',
                    title: '竣工文件',
                    notice: false,
                    isColor: false
                },
                {
                    id: 8,
                    color: 'teal',
                    title: '更多',
                    notice: true,
                    noticeNum: 1,
                    isColor: false
                }
            ],
            list: [], // 除了更多内容外的其他7个的显示内容数据 ,已经使用store替代
            cacheList: [], // 缓存使用,已经使用store替代
            searchList: [], // 搜索出来的数组
            assign: { // 发布任务弹窗的对象
                isShow: false,
                params: ''
            },
            pages: { // 分页对象
                currentPage: 1,
                limit: 10,
                total: null
            }
        }
    },
    components: {
        ProjectNav,
        // NewAdd,
        EntityFile,
        ShowImg,
        AssignTask,
        // Niusearch,
        Niupage
        // ProjectApproval
    },
    mounted() {
        // 考虑到路由因素哎~~~~~
        // const { id } = this.$route.query
        // this.id = id
        // this.items[0].isColor = true // 选中状态
        // console.log(this.$store.phone)
        // const listParams = { // store使用
        //     id,
        //     type: 1
        // }
        // this.getInformationListFun(listParams) // action
    },
    destroyed() {
        console.log(1)
    },
    activated () {
        // console.log(111)
        const { id } = this.$route.query
        this.id = id
        const params = {
            queryInteger: id,
            pageSize: 10,
            currentPage: 1
        }
        this.$axios.post('http://58.22.125.43:8888/file/findFilesByEsc', params).then((res) => {
            console.log(res)
            this.pages.total = res.data.total
            this.searchList = res.data.rows
        })
    },
    deactivated() {
        // 用来解决projectnav的样式问题
        for (const value of this.items) {
            value.isColor = false
        }
        // 不建议直接操作store
        this.$store.state.informationListCache = []
        this.$store.state.informationList = []
        this.nowPosition = 1
    },
    methods: {
        // store
        getInformationListFun(list) {
            this.$store.dispatch('getInformationListFun', list)
        },
        // router
        // 路由返回《
        back() {
            this.$router.go(-1)
        },
        // 内容获取
        getInfo(e) {
            this.nowPosition = 0
            // 对选中状态时候字变红的处理
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].isColor = false // 其他状态
            }
            this.items[e - 1].isColor = true // 当前状态
            // 判断是不是8 8是更多内容
            if (e === 8) {
                this.isEntityFile = false
            } else {
                this.isEntityFile = true
                if (this.$store.state.informationListCache[e - 1] === undefined) {
                    const listParams = { // store使用
                        id: this.id,
                        type: e
                    }
                    this.getInformationListFun(listParams) // action
                } else {
                // 使用缓存
                    this.$store.commit('changeInformationList', e)
                }
            }
        },
        // 展示二维码
        handleShowImg(e) {
            // e是动态的,e是接口返回的数据
            this.ImgCode = e
            this.ShowImg = true
        },
        // 隐藏二维码
        handleHideImg(e) {
            console.log(11)
            this.ShowImg = false
        },
        // 显示隐藏评论列表
        handleShowReplyItem(e) {
            // console.log(e)
            const arr = e.split('.')
            // console.log(arr)
            this.$store.state.informationList[arr[0]].date[arr[1]].isShowComment = !this.$store.state.informationList[arr[0]].date[arr[1]].isShowComment
            // 截取
            // this.list
        },
        // 折叠
        // showContent(e) {
        //     console.log(this.list[e])
        //     // this.list[e].ishidden = v!this.list[e].ishidden
        // }

        handleSearch(v) {
        //     const params = {
        //         queryInteger: v,
        //         pageSize: 10,
        //         currentPage: 1
        //     }
        //     this.$axios.post('http://58.22.125.43:8888/file/findFilesByEsc', params).then((res) => {
        //         console.log(res)
        //         this.pages.total = res.data.total
        //     })
        },
        handleCurrentChange(e) {
            const params = {
                queryInteger: this.id,
                pageSize: 10,
                currentPage: e
            }
            this.$axios.post('http://58.22.125.43:8888/file/findFilesByEsc', params).then((res) => {
                console.log(res)
                // this.pages.total = res.data.total
                this.searchList = res.data.rows
            })
        }
    },
    watch: {
        // 监听selected
        selected() {
            if (this.selected === '1') {
                MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                }).then(action => {
                    if (action === 'confirm') {
                        this.assign.isShow = true
                    } else {
                        this.selected = 0
                    }
                })
            } else if (this.selected === '2') {
                MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                }).then(action => {
                    if (action === 'confirm') {
                        this.$axios('http://58.22.125.43:8888/project/addCollect/' + this.$store.state.phone + '/' + this.id).then(
                            (res) => {
                                // console.log(res.data.message)
                                // this.star = res.data.message
                                Toast(res.data.message)
                            }
                        )
                        // 当用户点了取消变0
                    } else {
                        this.selected = 0
                    }
                })
            } else if (this.selected === '3') {
                MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                }).then(action => {
                    if (action === 'confirm') {
                        this.$axios('http://58.22.125.43:8888/project/updateProjectFinish/' + this.id).then(
                            (res) => {
                                Toast(res.data.message)
                                setTimeout(() => {
                                    this.$router.go(0)
                                }, 2000)
                            }
                        )
                    } else {
                    }
                    this.selected = 0
                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.mint-header {
    background: rgb(0, 186, 173);
    color: #fff;
}
.wrap {
    position: absolute;
    width 100%
    overflow hiddend
    left: 0;
    right: 0;
    top: 234px;
    bottom: 40px;
    overflow: auto;
    border-bottom: 4px solid #e7e7e7;
}
.wrap1 {
    position: absolute;
    width 100%
    overflow hiddend
    left: 0;
    right: 0;
    // top: 234px;
    bottom: 36px;
    overflow: auto;
    border-bottom: 4px solid #e7e7e7;
}

footer {
    height: 40px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    div {
        position: absolute;
        display: flex;
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
        color: teal;
        background: rgba(211, 211, 211, 0.8);
    }
}
.mint-navbar
    .mint-tab-item
        border 1px solid #e7e7e7
        box-shadow 0 0 2px #000
.content
    height calc(100% - 36px)
.item {
    padding: 0 10px;

    // border-bottom: 2px solid rgb(231, 231, 231);
    .title {
        // padding: 5px 0;
        // font-size: 12px;
        // color: gray;
        // font-weight: bold;
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
                overflow-y hidden
                position relative
                overflow-y:hidden;
                .btn-li {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    align-items center
                    justify-content center
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
// lock
            .btn-ul-lock {
                flex: 1;
                display: flex;
                width: 50%;
                font-size: 11px;
                color: gray;
                position relative
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

</style>
