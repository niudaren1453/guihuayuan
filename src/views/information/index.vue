<template>
    <div class="Infomation">
        <Header title='项目' state= 2 />
        <!-- <NewAdd></NewAdd> -->
        <nav>
            <ProjectNav v-on:getInfo="getInfo" :list="items" />
        </nav>
        <main class="wrap">
            <!-- 暂且分为两中一个是分页时候的状态，一个非分页时候的状态 -->
            <template v-if="nowPosition===0">
                <!-- 以下分为2种情况 一个是非更多的内容 ,还有一个是更多的内容 -->
                <!-- v-on:handleShowImg="handleShowImg" -->
                <EntityFile :items= this.$store.state.informationList v-on:handleShowReplyItem="handleShowReplyItem"
                 v-if='isEntityFile' v-on:handleShowChiReplyItem='handleShowChiReplyItem'
                 v-on:handleShowAddChiFile='handleShowAddChiFile'></EntityFile>
                <!-- v-on:showContent='showContent' -->
                <div v-else>
                    <mt-navbar v-model="selected">
                        <mt-tab-item id="1">发布任务 </mt-tab-item>
                        <mt-tab-item id="2" >项目星标</mt-tab-item>
                        <mt-tab-item id="3">项目归档</mt-tab-item>
                        <mt-tab-item id="4">修改项目名</mt-tab-item>
                        <mt-tab-item id="5">任务列表</mt-tab-item>
                    </mt-navbar>
                    <mt-tab-container v-model="selected">
                        <mt-tab-container-item id="5">
                            <div class="more-project-content">
                                <div class="content-ul" v-for="(moreItem, index) in projectPages.list" :key="index">
                                  <div><label>任务内容:</label>{{moreItem.taskContent}} </div>
                                  <div><label>任务开始时间:</label>{{moreItem.taskStartTime}}</div>
                                  <div><label>任务结束时间:</label>{{moreItem.taskEndTime}} </div>
                                  <div><label>接收人:</label>{{moreItem.recipient}}</div>
                                  <div><label>指派人:</label>{{moreItem.designation}}</div>
                                  <!-- <div><label>任务进度:</label>{{moreItem.taskProgress}}</div> -->
                                </div>
                            </div>
                            <div class="more-project-page"
                            style="display: flex; justify-content: center;">
                                <el-pagination
                                    :page-size="projectPages.limit"
                                    background
                                    layout="prev, pager, next"
                                    :total="projectPages.total"
                                    :current-page="projectPages.currentPage"
                                    @current-change="handleProjectChnge"
                                   >
                                </el-pagination>
                                    <!-- " -->
                                    <!--  -->
                            </div>
                        </mt-tab-container-item>
                    </mt-tab-container>
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
                                    <router-link tag="div" :to="{name:'task',query:{id:item.id}}" class="btn-li" >
                                            <i class="iconfont icon-wendang" ></i>
                                            <div>任务列表</div>
                                        </router-link>
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
                                            <div class="btn-li" @click="handleShowPageCommit(index)">
                                                <i class="iconfont icon-wendang"></i>
                                                <div>评论</div>
                                            </div>
                                            <div class="btn-li" @click="handleLockFile(index,item.id)"> <!-- @click="handleLockFile(index,index2,item.id)-->
                                                <i class="iconfont icon-wendang"></i>
                                            <div>锁定文件</div>
                                            </div>
                                            <!-- 纱布 -->
                                            <div class="gauze" v-if="item.fileLock == '1'"> </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <!-- 评论显示 -->
                        <div class="file-item" v-if="item.ishiddencomment">
                            <div class="action-btn">
                                <mt-button @click.native="handleShowPageReply(item.id)"  size="normal">评论</mt-button>
                            </div>
                            <!-- 3 -->
                            <div class="file-content file-child" v-for="(item2, index2) in item.listComment" :key="index2">
                                <div class="file-left">
                                    <!-- <img src /> -->
                                </div>
                                <div class="file-mid">
                                    <div class="mid-top">
                                        <p>{{item2.commentContent}}</p>
                                    </div>
                                    <div class="mid-bot">
                                        <p>{{item2.commentProson}}</p>&nbsp;&nbsp;
                                        <p style="margin-left: 10px">评论时间：{{item2.commentTime}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <Reply :isShow = isShowReply v-on:hideBox = hideBox :id = fileId />
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
        <!-- <ShowImg :ShowImg="ShowImg" :ImgCode="ImgCode" v-on:handleHideImg="handleHideImg" /> -->
        <!-- 发布任务组件 -->
        <AssignTask v-if='assign.isShow' cancel='hideAssign'> </AssignTask>
        <!-- 更多修改项目名显示 -->
        <ShowInput :isShow='isShowInput' v-on:define='setProjectName'
        v-on:cancel='hideShowInput' />
        <!-- 添加子文件夹使用0 -->
        <ShowInput :isShow='isShowInput2' v-on:define="createFile"
        v-on:cancel='hideShowInput' />
    </div>
</template>

<script>
import Header from '@/components/common/headerSearch/Header' // 头
// import Niusearch from '@/components/common/n-search'
import Niupage from '@/components/common/n-page' // 分页
import { Toast, MessageBox } from 'mint-ui' // mintui
import ProjectNav from './components/ProjectNav' // 8个模块的nav
// import NewAdd from '@/components/NewAdd'
import EntityFile from '@/components/EntityFile' // 7个模块的内容组件
// import ShowImg from '@/components/show/ShowImg'
// import ProjectApproval from '../components/ProjectApproval'
import AssignTask from './components/AssignTask' // 发布任务
import Reply from '@/components/show/Reply' // 评论弹窗
import ShowInput from '@/components/show/ShowInput' // 更多-修改项目名使用
export default {
    data() {
        return {
            id: 1, // id
            fileId: 0, // 文件id 给分页的时候使用
            typeId: 1, // 当前类型id   用在添加子文件的时候使用
            // address: ['electronicsfile1', 'electronicsfile2'],
            ShowImg: false, // 是否二维码显示
            isEntityFile: true, // 是否隐藏entityfile
            isShowReply: false, // 是否显示评论弹窗
            isShowInput: false, // 是否显示input
            isShowInput2: false, // 是否显示input 创建子文件使用
            nowPosition: 1, // 当前的位置 0 是分页 1是非分页 2待定
            selected: 0, // 更多内容tab使用
            addIndex: 0, // 添加子文件夹的  父文件的索引
            // ImgCode: '', // 二维码的code
            // more 使用
            // file: '', // 归档字符
            // star: '', // 星标字符
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
            // list: [], // 除了更多内容外的其他7个的显示内容数据 ,已经使用store替代
            // cacheList: [], // 缓存使用,已经使用store替代
            searchList: [], // 搜索出来的数组(如今没有搜索了，固！随机应变)
            assign: { // 发布任务弹窗的对象
                isShow: false,
                params: ''
            },
            pages: { // 分页对象
                currentPage: 1,
                limit: 10,
                total: null
            },
            projectPages: {
                list: [],
                currentPage: 1,
                limit: 3,
                total: null
            }
        }
    },
    components: {
        ProjectNav,
        // NewAdd,
        EntityFile,
        // ShowImg,
        AssignTask,
        // Niusearch,
        Niupage,
        Header,
        Reply,
        ShowInput
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
    // --------------------------------------------------------
    methods: {
        // store
        getInformationListFun(list) {
            this.$store.dispatch('getInformationListFun', list)
        },
        // 内容获取
        getInfo(e) {
            this.typeId = e
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
        /*  2020/8/24
            niu
            客户需求更改，说是不用二维码
        */
        // 展示二维码
        // handleShowImg(e) {
        //     // e是动态的,e是接口返回的数据
        //     this.ImgCode = e
        //     this.ShowImg = true
        // },
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
        // 显示隐藏子文件夹文件评论列表
        handleShowChiReplyItem(e) {
            const arr = e.split('.')
            this.$store.state.informationList[arr[0]].sonFile[arr[1]].file[arr[2]].ishiddencomment = !this.$store.state.informationList[arr[0]].sonFile[arr[1]].file[arr[2]].ishiddencomment
        },
        // 折叠(废弃)
        // showContent(e) {
        //     console.log(this.list[e])
        //     // this.list[e].ishidden = v!this.list[e].ishidden
        // }

        // 搜索的方法（废弃）
        // handleSearch(v) {
        //     const params = {
        //         queryInteger: v,
        //         pageSize: 10,
        //         currentPage: 1
        //     }
        //     this.$axios.post('http://58.22.125.43:8888/file/findFilesByEsc', params).then((res) => {
        //         console.log(res)
        //         this.pages.total = res.data.total
        //     })
        // },
        handleCurrentChange(e) {
            const params = {
                queryInteger: this.id,
                pageSize: 10,
                currentPage: e
            }
            this.$axios.post('http://58.22.125.43:8888/file/findFilesByEsc', params).then((res) => {
                // console.log(res)
                // this.pages.total = res.data.total
                this.searchList = res.data.rows
            })
        },
        // -------------------------------------------------待考虑组件中
        // 锁定文件提示
        handleLockFile(index, e) {
            // console.log(index)
            // console.log(e)
            // console.log(this.searchList)
            MessageBox({
                title: '提示',
                message: '确定执行此操作?',
                showCancelButton: true
            }).then(action => {
                if (action === 'confirm') {
                    this.$axios('http://58.22.125.43:8888/file/fileLock/' + e).then((res) => {
                        console.log(res)
                        if (res.data.flag === true) {
                            this.searchList[index].fileLock = 1
                            Toast(res.data.message)
                            // 更改当前选定的变色
                        } else {
                            Toast('文件锁定失败')
                        }
                        // 根据返回的东西进行判断是否锁定文件成功
                    })
                }
            })
        },
        // 分页的评论展示
        handleShowPageCommit(e) {
            // console.log(1)
            // console.log(e)
            console.log(this.searchList[e].ishiddencomment)
            // this.searchList[e].ishiddencomment = !this.searchList[e].ishiddencomment
            this.searchList[e].ishiddencomment = !this.searchList[e].ishiddencomment
            // if(this.searchList[e])
        },
        handleShowPageReply(v) {
            this.isShowReply = true
            this.fileId = v
        },
        // 弹窗评论隐藏组件
        hideBox(e) {
            this.isShowReply = false
        },
        // 添加子文件夹方法
        createFile(e) {
            // console.log(e)
            // console.log(this.id)
            // console.log(this.typeId)
            // console.log(this.addIndex)
            const sonfile = this.id + '/' + this.typeId + '/' + this.addIndex + '/' + e
            this.$axios('http://58.22.125.43:8888/file/createSonFile?sonfile=' + sonfile).then(
                (res) => {
                    Toast(res.data.message)
                    setTimeout(() => {
                        this.$router.go(0)
                    }, 1500)
                }
            )
        },
        // ---------------------------------------------------------------

        // 更多中的方法-------
        // 设置项目名字
        setProjectName(e) {
            console.log(e)
            this.$axios('http://58.22.125.43:8888/project/updateNickName/' + e + '/' + this.id).then(
                (res) => {
                    Toast(res.data.message)
                    this.isShowInput = false
                    setTimeout(() => {
                        this.$router.go(0)
                    }, 1500)
                })
        },
        // 隐藏
        hideShowInput() {
            this.isShowInput = false
            this.isShowInput2 = false
        },
        // 列表http函数
        handleProjectChnge(e) {
            const params = {
                currentPage: e,
                pageSize: this.projectPages.limit,
                queryInteger: this.id
            }
            this.$axios.post('http://58.22.125.43:8888/task/findProjectTask', params).then(
                (res) => {
                    console.log(res.data.total)
                    this.projectPages.total = res.data.total
                    this.projectPages.list = res.data.rows
                }
            )
        },
        // 添加文件夹
        handleShowAddChiFile(index) {
            this.addIndex = index
            this.isShowInput2 = true
        },
        hideAssign() {
            this.assign.isShow = false
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
                                }, 1500)
                            }
                        )
                    } else {
                    }
                    this.selected = 0
                })
            } else if (this.selected === '4') {
                MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                }).then(action => {
                    if (action === 'confirm') {
                        this.isShowInput = true
                    } else {
                    }
                    this.selected = 0
                })
            } else if (this.selected === '5') {
                const params = {
                    currentPage: this.projectPages.currentPage,
                    pageSize: this.projectPages.limit,
                    queryInteger: this.id
                }
                this.$axios.post('http://58.22.125.43:8888/task/findProjectTask', params).then(
                    (res) => {
                        console.log(res.data.total)
                        this.projectPages.total = res.data.total
                        this.projectPages.list = res.data.rows
                    }
                )
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
// 子评论内容
.file-item {
    // position relative
    width: 100%;
    // border-bottom 4px solid rgb(231, 231, 231)
    .action-btn {
        display flex
        justify-content flex-end
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
        border-top  1px solid rgb(231, 231, 231)
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
            align-items:flex-start;
            div {
                margin-top 2px
                color: #fff;
                background: #00baad;
                padding: 2px 5px;
            }
        }
    }
}
.more-project-content
    .content-ul
        margin 20px
        div
            border 1px solid #00baad
            font-size 14px
            padding 10px
            line-height 150%
        label
            font-weight 550
            padding-right 10px
            font-size 16px
</style>
