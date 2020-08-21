<template>
    <div>
        <Header title="通知"></Header>
        <main class="wrap">
            notice
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
</style>
