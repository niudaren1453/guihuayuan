<template>
    <div id="task-container">
        <mt-header title='项目'>
            <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <Log :list = "list" />
  </div>
</template>

<script>
import Log from './components/Task.vue'
export default {
    name: 'task',
    data() {
        return {
            list: []
        }
    },
    activated() {
        const { id } = this.$route.query
        this.id = id
        this.$axios.get('http://58.22.125.43:8888/task/findFilesTask/' + id).then(res => {
            // console.log(res.data)
            this.list = res.data
        })
    },
    methods: {
        back() {
            this.$router.go(-1)
            this.$store.informationCache = false
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
