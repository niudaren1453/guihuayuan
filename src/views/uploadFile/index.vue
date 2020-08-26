<template>
  <div>
    <mt-header title='xiangmu'>
      <mt-button icon="back" slot="left" @click="back"></mt-button>
    </mt-header>
    <!--<div class="wrap">-->
     <Fileupload />
    <!--</div>-->
  </div>
</template>

<script>
import Fileupload from '@/components/Fileupload'
export default {
    name: 'uploadFile',
    data () {
        return {
        }
    },
    mounted() {
        // const { id } = this.$route.query.id
        // this.id = id
        // const { typeId } = this.$route.query.typeId
        // this.type = typeId
    },
    components: {
        Fileupload
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
.mint-header
    background rgb(0,186,173)
    color #fff
.wrap
    position absolute
    left 0
    right 0
    top 40px
    bottom 0
    overflow auto
</style>
