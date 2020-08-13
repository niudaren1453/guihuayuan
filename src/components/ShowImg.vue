<template>
    <div class="ShowImg" v-if="ShowImg" @click="handleHideImg">
        <img :src="ImgCode" />
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        ShowImg: Boolean,
        ImgCode: String
    },
    components: {},
    methods: {
        handleHideImg(e) {
            // this.ShowImg = false
            this.$emit('handleHideImg', e)
        }
    }
}
</script>
<style lang="stylus" scoped>
.ShowImg{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.8);
    z-index: 8;
}
img{
    position absolute;
    left 50%
    top 50%
    transform translate(-50%,-50%)
    height: 220px;
    widows: 220px;
}
</style>
