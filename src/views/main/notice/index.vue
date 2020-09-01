<template>
    <div>
        <Header title="通知"></Header>
        <mt-navbar v-model="selected" >
            <mt-tab-item id="1" >
                <slot >
                    <div style="position:absolute;right:50%;top:50%;transform: translate(50%,-50%); font-size:13px;"> 待处理的任务</div>
                    <div style="position:absolute;right:15px;top:0;color:red;font-size:20px">{{waitingNum}}</div>
                </slot>
            </mt-tab-item>
            <mt-tab-item id="2">
                <slot>
                    <div style="position:absolute;right:50%;top:50%;transform: translate(50%,-50%); font-size:13px;"> 过期或处理过的任务</div>
                    <div style="position:absolute;right:15px;top:0;color:red;font-size:20px">{{finishedNum}}</div>
                </slot>
            </mt-tab-item>
        </mt-navbar>
         <main class="wrap">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <Box :array='waiting' />
                    <!-- <Box /> -->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <!-- <Box /> -->
                    <Box :array='finished'/>
                </mt-tab-container-item>
            </mt-tab-container>
        </main>
    </div>
</template>

<script>
import Header from '@/components/common/headerSearch/Header'
import Box from './components/Box'
export default {
    data() {
        return {
            selected: '',
            waitingNum: 2,
            finishedNum: 3,
            waiting: [],
            finished: []

        }
    },
    components: {
        Header,
        Box
    },
    mounted() {
        this.$axios('http://58.22.125.43:8888/task/notice/' + this.$store.state.phone).then((res) => {
            this.waiting = res.data[0].date
            this.waitingNum = res.data[0].date.length
            this.finished = res.data[1].date
            this.finishedNum = res.data[0].date.length
        })
    }
}
</script>

<style lang="stylus" scoped>
.wrap
    position absolute
    left 0
    right 0
    bottom 55px
    top 77px
    overflow auto
.mint-tab-item
    position relative

</style>
