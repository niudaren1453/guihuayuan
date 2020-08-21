<template>
    <div class="n-page">
        <el-pagination
            :page-size="pages.limit"
            background
            layout="prev, pager, next"
            :total="pages.total"
            :current-page="pages.currentPage"
            @current-change="handleCurrentChange"
            >
         <!-- @current-change="handleCurrentChange" -->
        </el-pagination>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    props: {
        pages: Object
    },
    components: {

    },
    methods: {
        handleCurrentChange(e) {
            this.$emit('handleCurrentChange', e)
        }

    }
}
</script>

<style>
.n-page{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
}

</style>
