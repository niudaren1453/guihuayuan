<template>
    <div class="newadd-tem" >
      <div class="absolute"></div>
        <!-- <mt-picker :slots="slots" @change="onValuesChange"></mt-picker> -->
    </div>
</template>

<script>
// export default {
//     data() {
//         return {
//             slots: [
//                 {
//                     divider: true,
//                     content: '-',
//                     className: 'slot2'
//                 },
//                 {
//                     flex: 1,
//                     values: [
//                         '2015-01',
//                         '2015-02',
//                         '2015-03',
//                         '2015-04',
//                         '2015-05',
//                         '2015-06'
//                     ],
//                     className: 'slot3',
//                     textAlign: 'left'
//                 }
//             ]
//         }
//     },
//     components: {},
//     methods: {
//         onValuesChange(picker, values) {
//             if (values[0] > values[1]) {
//                 picker.setSlotValue(1, values[0])
//             }
//         }
//     }
// }
</script>

<style lang="stylus" scoped>
.newadd-tem
    position fixed
    z-index 100
    .absolute
        position absolute
        width 100%
        height 100%
        backgroun red
</style>
