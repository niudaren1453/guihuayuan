<template>
    <div class="search" :class="isShowSearch===false?'trans':''" >
        <mt-header >
            <mt-button  slot="left" @click.native='back'> &lt;&lt;&lt;返回首页</mt-button>
        </mt-header>
        <!--  -->
        <div class="search-box">
            <div class="search-shadow" @click.self="handleCloseSearch">
            <div class="search-box">
                <mt-field  placeholder="请输入搜索标题" v-model="searchValue">
                    <mt-button type="primary" size="small" @click.native='handleSearch'>搜索</mt-button>
                </mt-field>
            </div>
        </div>
        </div>
        <!-- 内容  -->
        <div class="content" >
            <ul v-if='isContent'>
                <li>项目信息</li>
                <li>项目信息</li>
                <li>项目信息</li>
                <li>项目信息</li>
                <li>项目信息</li>
                <li>项目信息</li>
                <li>项目信息</li>
                <li>项目信息</li>
                <li>项目信息</li>
                <li>项目信息</li>
            </ul>
        </div>
        <!-- page -->
        <div class="page">
            分页内容
        </div>
 </div>
</template>

<script>
export default {
    data () {
        return {
            isContent: false
        }
    },
    props: {
        isShowSearch: Boolean,
        searchValue: String
    },
    components: {

    },
    methods: {
        back () {
            this.$emit('back')
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
    li
        height 10vh
        width 100vw
        background rgba(222,222,222,0.7)
.page
    background red
    width 100%
    height calc(100% - 80vh - 88px)
</style>
