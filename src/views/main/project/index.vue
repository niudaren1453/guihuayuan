<template>
    <div class="project">
        <Header title="项目"></Header>
        <main class="wrap">
            <div class="box" v-for="(item, index) in list" :key="index">
                <div class="box-title" @click='handleShow(index)'>
                    <font class="iconfont icon-xingxing"   ></font>
                    <label>{{item.title}} ({{item.count}})</label>
                    <font class="iconfont" style="float:right"
                    :class="item.ishidden?'icon-xiangshang':'icon-xiajiantou'"></font>
                </div>
                <template v-if="item.ishidden">
                    <router-link :to="{name:'information',query:{id:item2.id}}" v-for="(item2, index2) in item.date" :key="index2">
                        <div class="box-content">
                            <div class="content-top">
                                <p>{{item2.projectTitle}}</p>
                                <p>{{item2.projectProgress}}%</p>
                            </div>
                            <div class="content-mid">{{item2.unit}}</div>
                            <div class="content-bottom">
                                <p>{{item2.auThor}}</p>
                                <div>{{item2.dept}}</div>
                                <font class="iconfont icon-icon-user">{{item2.deptNum}}</font>
                            </div>
                        </div>
                    </router-link>
                </template>
            </div>
        </main>
    </div>
</template>
<script>
import Header from '@/components/common/headerSearch/Header'
export default {
    data() {
        return {
            list: []
            // list: [
            //     {
            //         title: '星标项目',
            //         num: 2,
            //         item: [
            //             {
            //                 str1: '2017-市政-167',
            //                 str2: '福州设计院',
            //                 str3: '李四',
            //                 str4: '市政所',
            //                 str5: '30%',
            //                 num: 5
            //             },
            //             {
            //                 str1: '2017-市政-167',
            //                 str2: '福州设计院',
            //                 str3: '李四',
            //                 str4: '市政所',
            //                 str5: '30%',
            //                 num: 5
            //             }
            //         ]
            //     },
            //     {
            //         title: '我负责的项目',
            //         num: 2,
            //         item: [
            //             {
            //                 str1: '2017-市政-167',
            //                 str2: '福州设计院',
            //                 str3: '李四',
            //                 str4: '市政所',
            //                 str5: '30%',
            //                 num: 5
            //             },
            //             {
            //                 str1: '2017-市政-167',
            //                 str2: '福州设计院',
            //                 str3: '李四',
            //                 str4: '市政所',
            //                 str5: '30%',
            //                 num: 5
            //             },
            //             {
            //                 str1: '2017-市政-167',
            //                 str2: '福州设计院',
            //                 str3: '李四',
            //                 str4: '市政所',
            //                 str5: '30%',
            //                 num: 5
            //             }
            //         ]
            //     }
            // ]
        }
    },
    components: {
        Header
    },
    mounted() {
        this.$axios('http://58.22.125.43:8888/project/findAll/' + this.$store.state.phone).then(res => {
            console.log(res.data)
            this.list = res.data
        })
    },
    methods: {
        handleShow (i) {
            // console.log(i)
            this.list[i].ishidden = !this.list[i].ishidden
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrap
    position absolute
    left 0
    right 0
    bottom 55px
    top 40px
    overflow auto
.box
    padding 0 5px
    color rgb(153, 153, 153)
    .box-title
        height 30px
        line-height 30px
        .iconfont
            padding-right 5px
        label
            font-size 14px
    .box-content
        display flex
        height 90px
        flex-direction column
        box-shadow 1px 2px 1px rgb(158, 158, 158)
        border 1px solid rgb(158, 158, 158)
        margin-bottom 3px
        .content-top
            flex 1
            padding 0 5px
            background rgb(0, 187, 211)
            font-size 14px
            line-height 30px
            p
                &:nth-child(1)
                    color #FFF
                    padding-left 8px
                    float left
                &:nth-child(2)
                    color #fff
                    padding-right 8px
                    float right
        .content-mid
            padding 0 5px
            flex 1
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 12px
            line-height 30px
            color gray
        .content-bottom
            padding 0 5px
            flex 1
            color gray
            p
                font-size 14px
                float left
                line-height 20px
            div
                margin 5px 0 0 10px
                background rgb(0, 187, 211)
                color #Fff
                float left
                font-size 10px
                text-align center
                border-radius 15px
                width 45px
            font
                margin-right 10px
                float right
</style>
