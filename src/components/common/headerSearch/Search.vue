<template>
    <div class="search" :class="isShowSearch===false?'trans':''" >
        <mt-header >
            <mt-button  slot="left" @click.native='back'> &lt;&lt;&lt;返回首页</mt-button>
        </mt-header>
        <!--  -->
        <div class="search-box">
            <div class="search-shadow" @click.self="handleCloseSearch">
            <div class="search-box">
                <mt-field  placeholder="请输入搜索标题" v-model="nowSearchValue">
                    <mt-button type="primary" size="small" @click.native='handleSearch1'>搜索</mt-button>
                </mt-field>
            </div>
        </div>
        </div>
        <!-- 内容  -->
        <div class="content" >
            <!-- 判断是否是项目页还是什么页面通过state -->
            <template v-if="state==1">
                <!-- 当没有搜索到东西的时候跟有搜索到东西的时候 -->
                <template v-if="list.length>0?true:false">
                <ul v-for="(item, index) in list" :key="index">
                    <li>
                        <!-- 项目标题 -->
                        <router-link :to="{name:'information',query:{id:item.id}}">
                        <div class="box-content">
                            <div class="content-top">
                                <p>{{item.projectTitle}}</p>
                                <p>{{item.projectProgress}}%</p>
                            </div>
                            <div class="content-mid">{{item.unit}}</div>
                            <div class="content-bottom">
                                <p>{{item.auThor}}</p>
                                <div>{{item.dept}}</div>
                                <font class="iconfont icon-icon-user">{{item.deptNum}}</font>
                            </div>
                        </div>
                    </router-link>
                    </li>
                </ul>
                </template>
                <template v-else>
                <div style="color:red;font-weight:550;font-size:20px; padding:20px;border-top:1px solid gray"> 没有搜索到你要找的内容</div>
                </template>
            </template>
            <!-- ------------else -->
            <template v-if="state ==2">
                    <!-- 当没有搜索到东西的时候跟有搜索到东西的时候 -->
                <template v-if="list.length>0?true:false">
                    <!--  -->
                    <div class="item" v-for="(item, index) in list" :key="index" >
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
                </template>
                <template v-else>
                <div style="color:red;font-weight:550;font-size:20px; padding:20px;border-top:1px solid gray"> 没有搜索到你要找的内容</div>
                </template>
            </template>
        </div>
        <!-- page -->
        <div class="page">
            <el-pagination
                :page-size="pages.limit"
                background
                layout="prev, pager, next"
                :total="pages.total"
                :current-page="pages.currentPage"
                @current-change="handleCurrentChange"
              >
                 <!-- @current-change="handleCurrentChange" -->
            </el-pagination>
        </div>
 </div>
</template>

<script>
export default {
    data () {
        return {
            // isContent: false, // 暂且无用
            nowSearchValue: ''
        }
    },
    props: {
        isShowSearch: Boolean,
        searchValue: String,
        list: Array,
        oldSearchValue: String,
        state: { // 判断左边显示啥
            type: [Number, String],
            default: 1
        },
        pages: Object
    },
    created() {
        // this.nowSearchValue = this.searchValue
        // console.log(this.pages)
    },
    components: {

    },
    methods: {
        back () {
            this.$emit('back')
        },
        handleSearch1 () {
            // console.log(this.oldSearchValue)
            // this.oldSearchValue = this.nowSearchValue
            this.$emit('handleSearch1', this.nowSearchValue)
        },
        handleCurrentChange(e) {
            // console.log(e)
            // this.oldSearchValue = this.nowSearchValue
            console.log(e + 'ss')
            const obj = {
                pagenum: e,
                searchValue: this.oldSearchValue
            }
            // console.log(111)
            this.$emit('handleCurrentChange', obj)
        }
    }
}
</script>

<style lang="stylus" scoped>
.mint-header {
    background: rgb(0, 186, 173);
    color: #fff;
}
.search
    position fixed
    left 0
    top 0
    height 100vh
    width 100vw
    z-index 110
    background #fff
.trans
    transform translate(-100%)

.content
    width 100%
    height 80vh
    overflow auto
    position relative
ul
    border-top 1px solid gray
    margin-top 5px
    // li

.page
    width 100%
    height calc(100% - 80vh - 88px)
    display flex
    justify-content center
    align-items center
// 内容
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
