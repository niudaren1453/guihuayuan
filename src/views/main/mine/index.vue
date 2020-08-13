<template>
    <div>
        <Header title="我的"></Header>
        <div class="action-box">
            <div>全部</div>
            <div>未读</div>
            <div>@我的</div>
            <div>需回复</div>
            <div>待处理</div>
        </div>
        <main class="wrap">
        </main>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    data() {
        return {}
    },
    components: {
        Header
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
</style>
