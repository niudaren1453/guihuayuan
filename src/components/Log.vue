<template>
    <div class="log-content">
        <div><label>文件名:</label>{{list[0].operationObject}} </div>
        <div><label>上传人:</label>{{list[0].operatorPerson}} </div>
        <div><label>日期:</label>{{list[0].operatorTime}} </div>
        <div><label>文件描述:</label>{{list[0].operatorContext}} </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    props: {
        list: Array
    },
    components: {},
    mounted() {
    //  id
    }
}
</script>
<style lang="stylus" scoped>
.log-content
    padding 20px
    div
        border 1px solid #00baad
        font-size 14px
        padding 10px
        line-height 150%
    label
        font-weight 550
        padding-right 10px
        font-size 16px
</style>
