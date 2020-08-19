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
                    <mt-button type="primary" size="small" @click.native='handleSearch'>搜索</mt-button>
                </mt-field>
            </div>
        </div>
        </div>
        <!-- 内容  -->
        <div class="content" >
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
        pages: Object
    },
    created() {
        // this.nowSearchValue = this.searchValue
        console.log(this.pages)
    },
    components: {

    },
    methods: {
        back () {
            this.$emit('back')
        },
        handleSearch () {
            this.$emit('handleSearch', this.nowSearchValue)
        },
        handleCurrentChange(e) {
            console.log(e)
            const obj = {
                pagenum: e,
                searchValue: this.nowSearchValue
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
</style>
