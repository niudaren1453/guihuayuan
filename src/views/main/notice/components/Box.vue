<template>
    <section>
        <div class="box" v-for="(item, index) in array" :key="index">
            <div>任务开始时间：{{item.taskStartTime}}</div>
            <div>任务结束时间：{{item.taskEndTime}} </div>
            <div>指派人：{{item.designation}}</div>
            <div>内容：{{item.taskContent}}</div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        array: {
            type: Array,
            default() {
                return [
                    {
                        id: 3,
                        taskStartTime: '2020-10-10 00:00:00',
                        taskEndTime: '2020-10-10 00:00:00',
                        projectId: null,
                        recipient: '王五',
                        taskContent: '去工地倒立',
                        fileId: 89,
                        designation: '王金成',
                        recipient2: null,
                        taskProgress: 0
                    }, {
                        id: 3,
                        taskStartTime: '2020-10-10 00:00:00',
                        taskEndTime: '2020-10-12 00:00:00',
                        projectId: null,
                        recipient: '王五',
                        taskContent: '去工地倒立',
                        fileId: 89,
                        designation: '熊',
                        recipient2: null,
                        taskProgress: 0
                    }
                ]
            }
        }
    },
    components: {}
}
</script>

<style lang="stylus" scoped>
.box
    display flex
    padding 20px
    justify-content center
    flex-direction column
    div
        border solid 1px #00bbd3
        padding 10px
</style>
