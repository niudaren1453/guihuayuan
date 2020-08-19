<template>
    <div id="project">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <Tabbar />
    </div>
</template>
<script>
import Tabbar from './components/Tabbar'
export default {
    data() {
        return {
            list: [
                {
                    title: '星标项目',
                    num: 2,
                    item: [
                        {
                            str1: '2017-市政-167',
                            str2: '福州设计院',
                            str3: '李四',
                            str4: '市政所',
                            str5: '30%',
                            num: 5
                        },
                        {
                            str1: '2017-市政-167',
                            str2: '福州设计院',
                            str3: '李四',
                            str4: '市政所',
                            str5: '30%',
                            num: 5
                        }
                    ]
                },
                {
                    title: '我负责的项目',
                    num: 2,
                    item: [
                        {
                            str1: '2017-市政-167',
                            str2: '福州设计院',
                            str3: '李四',
                            str4: '市政所',
                            str5: '30%',
                            num: 5
                        },
                        {
                            str1: '2017-市政-167',
                            str2: '福州设计院',
                            str3: '李四',
                            str4: '市政所',
                            str5: '30%',
                            num: 5
                        }
                    ]
                }
            ]
        }
    },
    components: {
        Tabbar
    },
    methods: {}
}
</script>
<style lang="stylus" scoped>
</style>
