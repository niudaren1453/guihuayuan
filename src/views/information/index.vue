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
            <!-- 以下分为2种情况 一个是非更多的内容 ,还有一个是更多的内容 -->
            <EntityFile :items= this.$store.state.informationList v-on:handleShowImg="handleShowImg"
            v-on:handleShowReplyItem="handleShowReplyItem" v-if='isEntityFile'></EntityFile>
            <div v-else>
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">发布任务 </mt-tab-item>
                    <mt-tab-item id="2" >项目星标</mt-tab-item>
                    <mt-tab-item id="3">项目归档</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <!-- 我是发布的内容 -->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    {{star}}
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    {{file}}
                </mt-tab-container-item>
            </mt-tab-container>
            </div>
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
            assign: { // 发布任务弹窗的对象
                isShow: false,
                params: ''
            }
        }
    },
    components: {
        ProjectNav,
        // NewAdd,
        EntityFile,
        ShowImg,
        AssignTask
        // ProjectApproval
    },
    mounted() {
        const { id } = this.$route.query
        this.id = id
        this.items[0].isColor = true // 选中状态
        // console.log(this.$store.phone)
        const listParams = { // store使用
            id,
            type: 1
        }
        this.getInformationListFun(listParams) // action
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
</style>
