<template>
    <section class="task-content wrap">
        <template v-if="list.length >= 1">
            <div class="box" v-for="(task, index) in list" :key="index">
                <div><label>任务内容: </label>{{task.taskContent}}</div>
                <div><label>指派人:</label> {{task.designation}}</div>
                <div><label>接收人:</label>{{task.recipient}}</div>
                <div><label>任务进度:</label>{{task.taskProgress}}</div>
                <div><label>任务开始时间:</label>{{task.taskStartTime}}</div>
                <div><label>任务结束时间:</label>{{task.taskEndTime}} </div>
            </div>
        </template>
        <template v-else><div>没有数据噢</div></template>
    </section>
</template>
<script>
export default {
    name: 'Task',
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
.wrap {
    position: absolute;
    width 100%
    overflow hiddend
    left: 0;
    right: 0;
    top: 40px;
    bottom: 0;
    overflow: auto;
}
.task-content
    .box
        margin 20px
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
