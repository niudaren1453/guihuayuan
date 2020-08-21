<template>
    <div class="n-search">
        <mt-field  placeholder="请输入搜索标题" v-model="nowSearchValue">
            <mt-button type="primary" size="small" @click.native='handleSearch(nowSearchValue)'>搜索</mt-button>
        </mt-field>
    </div>
</template>

<script>
export default {
    data () {
        return {
            nowSearchValue: ''
        }
    },
    components: {

    },
    props: {
    },
    methods: {
        handleSearch(v) {
            this.$emit('handleSearch', v)
        }

    }
}
</script>

<style>

</style>
