<template>
    <div>
        <Header title="我的"></Header>
        <!-- <div class="action-box">
            <div>全部</div>
            <div>未读</div>
            <div>@我的</div>
            <div>需回复</div>
            <div>待处理</div>
        </div> -->
        <main class="wrap">
            <div class="item">
                <div class="id"><h1>1(这是id)</h1></div>
                <div class="title">这是标题噢,这是标题噢,这是标题噢,这是标题噢,这是标题噢,这是标题噢</div>
            </div>
        </main>
    </div>
</template>

<script>
import Header from '@/components/common/headerSearch/Header'
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
.item
    width 100%
    padding 10px
    border-bottom 1px solid #e7e7e7
    .id
    .title
        color red
        cursor default
</style>
