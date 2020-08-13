<template>
    <div class="Infomation">
        <mt-header title="xiangmu">
            <mt-button icon="back" slot="left" @click="back"></mt-button>
        </mt-header>
        <!-- <NewAdd></NewAdd> -->
        <nav>
            <ProjectNav v-on:getInfo="getInfo" :list="items" />
        </nav>
        <main class="wrap">
            <EntityFile :items= this.$store.state.informationList v-on:handleShowImg="handleShowImg"
            v-on:handleShowReplyItem="handleShowReplyItem"></EntityFile>
            <!-- <ProjectApproval/> -->
            <!-- <router-view></router-view> -->
            <!-- <EntityFile :items="list" v-on:handleShowImg="handleShowImg"></EntityFile> -->
        </main>
        <footer>
            <router-link tag="div" :to="{name:'uploadFile',query:{id:id,typeId:typeId}}">+</router-link>
        </footer>
        <ShowImg :ShowImg="ShowImg" :ImgCode="ImgCode" handleHideImg="handleHideImg" />
    </div>
</template>

<script>
import ProjectNav from './ProjectNav'
// import NewAdd from '@/components/NewAdd'
import EntityFile from '@/components/EntityFile'
import ShowImg from '@/components/ShowImg'
// import ProjectApproval from '../components/ProjectApproval'
export default {
    data() {
        return {
            id: 1,
            typeId: 1,
            address: ['electronicsfile1', 'electronicsfile2'],
            ShowImg: false,
            ImgCode:
                'http://qeiw9gjvi.bkt.clouddn.com/a5bb3834-64fb-4b9b-b1a7-99003ef537d4.jpg',
            items: [
                {
                    id: 1,
                    color: 'red',
                    title: '立项文件',
                    notice: true,
                    isColor: true,
                    noticeNum: 2
                },
                {
                    id: 2,
                    color: 'blue',
                    title: '前期资料',
                    notice: false,
                    isColor: true
                },
                {
                    id: 3,
                    color: 'green',
                    title: '现场照片',
                    notice: false,
                    isColor: true
                },
                {
                    id: 4,
                    color: 'teal',
                    title: '设计文件',
                    notice: false,
                    isColor: true
                },
                {
                    id: 5,
                    color: 'red',
                    title: '阶段审查',
                    notice: false,
                    isColor: true
                },
                {
                    id: 6,
                    color: 'blue',
                    title: '过程文件',
                    notice: false,
                    isColor: true
                },
                {
                    id: 7,
                    color: 'green',
                    title: '竣工文件',
                    notice: false,
                    isColor: true
                },
                {
                    id: 8,
                    color: 'teal',
                    title: '更多',
                    notice: true,
                    noticeNum: 1,
                    isColor: true
                }
            ],
            list: [],
            cacheList: []
        }
    },
    components: {
        ProjectNav,
        // NewAdd,
        EntityFile,
        ShowImg
        // ProjectApproval
    },
    mounted() {
        const { id } = this.$route.query
        this.id = id
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
        },
        // 展示二维码
        handleShowImg(e) {
            // console.log(e)
            this.ImgCode = e
            this.ShowImg = true
        },
        // 隐藏二维码
        handleHideImg(e) {
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
</style>
