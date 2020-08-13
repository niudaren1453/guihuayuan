<template>
    <div class="projectNav">
        <ul class="nav-ui">
            <!-- <router-link tag="li" :to="{name:'projectapproval',query:{id:1}}" v-for="(item, index) in items" :key="index">
                <a class="button" :style="{background:item.color}">
                    <div v-if="item.notice" class="notice">{{item.noticeNum}}</div>
                </a>
                <p>{{item.title}}</p>
            </router-link> -->
            <!-- <router-link tag="li" :to="{name:address[index],query:{id:id}}" v-for="(item, index) in items" :key="index">
                <a class="button" :style="{background:item.color}">
                    <div v-if="item.notice" class="notice">{{item.noticeNum}}</div>
                </a>
                <p>{{item.title}}</p>
            </router-link> -->
            <li v-for="(item, index) in list" :key="index" @click="getInfo(item.id)">
                <a class="button" :style="{background:item.color}">
                    <div v-if="item.notice" class="notice">{{item.noticeNum}}</div>
                </a>
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // id: 1,
            // address: ['electronicsfile1', 'electronicsfile2'],
            // items: [
            //     {
            //         id: 1,
            //         color: 'red',
            //         title: '立项',
            //         notice: true,
            //         isColor: true,
            //         noticeNum: 2
            //     },
            //     {
            //         color: 'blue',
            //         title: '合同',
            //         notice: false,
            //         isColor: true
            //     },
            //     {
            //         color: 'green',
            //         title: '上位',
            //         notice: false,
            //         isColor: true
            //     },
            //     {
            //         color: 'teal',
            //         title: '勘测',
            //         notice: false,
            //         isColor: true
            //     },
            //     {
            //         color: 'red',
            //         title: '现场',
            //         notice: false,
            //         isColor: true
            //     },
            //     {
            //         color: 'blue',
            //         title: '设计文件',
            //         notice: false,
            //         isColor: true
            //     },
            //     {
            //         color: 'green',
            //         title: '过程',
            //         notice: false,
            //         isColor: true
            //     },
            //     {
            //         color: 'teal',
            //         title: '竣工',
            //         notice: true,
            //         noticeNum: 1,
            //         isColor: true
            //     }
            // ]
        }
    },
    props: {
        navColor: Array,
        list: Array
    },
    mounted() {
    },
    methods: {
        getInfo(e) {
            this.$emit('getInfo', e)
        }
    },
    components: {}
}
</script>

<style lang="stylus" scoped>

.nav-ui
    width 100%
    display flex
    flex-wrap wrap
    border-bottom 4px solid rgb(231, 231, 231)
    li
        height 95px
        width 25%
        display flex
        justify-content center
        align-items center
        flex-direction column
        font-size 14px
        .button
            position relative
            transition 0.5s
            overflow hidden
            height 50px
            width 50px
            background red
            border-radius 10px
            position relative
             &:hover
                background: #21ebff;
                color:#111;
        .notice
            position absolute
            right 0
            height 15px
            width 15px
            text-align center
            line-height 15px
            transform translate(50%, -50%)
        p
            padding-top 5px
.router-link-active
    color red
</style>