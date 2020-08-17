<template>
    <header>
        <mt-header :title="title">
            <mt-button class="iconfont icon-weibiaoti--" slot="left"></mt-button>
            <mt-button slot="right" class="iconfont icon-search" style="margin-right:10px"
            @click.native="showSearch"></mt-button>
            <mt-button v-if="type"  slot="right" class="iconfont icon-icon-test"></mt-button>
        </mt-header>
        <!--  -->
        <!-- <div v-if="isShowSearch" class="search-shadow" @click.self="handleCloseSearch">
            <div class="search-box">
                <mt-field  placeholder="请输入搜索标题" v-model="searchValue">
                    <mt-button type="primary" size="small" @click.native='handleSearch'>搜索</mt-button>
                </mt-field>
            </div>
        </div> -->
        <!-- search -->
        <Search :isShowSearch='isShowSearch' :searchValue='searchValue' v-on:back='back'/>
    </header>
</template>

<script>
import Search from './Search'
export default {
    data() {
        return {
            searchValue: '',
            isShowSearch: false
        }
    },
    props: {
        title: String, // 标题
        type: Number // 用来接收判断 1 项目 2 我的  3 通知
    },
    components: {
        Search
    },
    methods: {
        // 显示搜索事件
        showSearch () {
            this.isShowSearch = true
        },
        // 点击搜索事件
        handleSearch () {
            console.log(11)
        },
        // 点击关闭窗口
        handleCloseSearch () {
            this.isShowSearch = false
        },
        back() {
            this.isShowSearch = false
            console.log(233)
        }
    }
}
</script>

<style lang="stylus" scoped>
.mint-header
    border-bottom 1px solid rgb(226, 226, 226)
.mint-tabbar
    background-color rgba(255, 255, 255, 0.6)
.search-shadow
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0,0,0,0.6)
    z-index 100
    .search-box
        width 100vw
        position fixed
        // left 50%
        top 0
        z-index 101
        // transform translate(-50%,-50%)
        background #fff
</style>