<template>
    <div class="log">
        <mt-header title='xiangmu'>
            <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <Log :list = "list" />
  </div>
</template>

<script>
import Log from '@/components/Log'
export default {
    data() {
        return {
            list: []
        }
    },
    mounted() {
        const { id } = this.$route.query
        this.id = id
        this.$axios.get('http://58.22.125.43:8888/log/findLogs/' + id).then(res => {
            console.log(res.data)
            this.list = res.data
        })
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    },
    components: {
        Log
    }
}
</script>

<style lang="stylus" scoped>
.mint-header
    background rgb(0,186,173)
    color #fff
</style>
