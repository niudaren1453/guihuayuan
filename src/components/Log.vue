<template>
    <div>
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="title">{{item.operationObject}}</div>
            <div class="content-item">
                <div class="right">
                    <div class="filename">{{item.operatorPerson}}</div>
                    <div class="content">
                        <div class="date_name">
                            <div>{{item.operatorTime}}</div>
                            <div>{{item.operatorContext}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
<style>
</style>
