<template>
    <div class="assignTask">
        <div class="ul">
            <div class="li">
                <span style="margin:0 auto">发布任务</span>
            </div>
            <div class="li">
                <div>任务内容</div>
                <div> <input type="text" v-model="content"></div>
            </div>
            <div class="li">
                <div>任务开始时间</div>
                <div>
                    <el-date-picker value-format='yyyy-MM-dd HH:mm:ss'
                     v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </div>
            </div>

            <div class="li">
                <div>任务结束时间</div>
                <div>
                    <el-date-picker value-format='yyyy-MM-dd HH:mm:ss'
                    v-model="value2" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </div>
            </div>
            <div class="li">
                <div>任务接收人</div>
                <div>
                    <!-- 下拉 -->
                    <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            <span v-for="(item, index) in command" :key="index">
                                {{command[index]}}
                            </span>
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item :command="item" v-for="(item, index) in item" :key="index">{{item}}</el-dropdown-item>
                            <!-- <el-dropdown-item command="沈佳麒">沈佳麒</el-dropdown-item>
                            <el-dropdown-item command="谌佳兵">谌佳兵</el-dropdown-item>
                            <el-dropdown-item command="小熊">小熊</el-dropdown-item>
                            <el-dropdown-item command="狗熊">狗熊</el-dropdown-item>
                            <el-dropdown-item command="熊CC">熊CC</el-dropdown-item>
                            <el-dropdown-item command="熊加息"> 熊加息</el-dropdown-item>
                            <el-dropdown-item command="熊嘉喜">熊嘉喜</el-dropdown-item>
                            <el-dropdown-item command="忘记成">忘记成</el-dropdown-item>
                            <el-dropdown-item command="王金成">王金成</el-dropdown-item>
                            <el-dropdown-item command="金金王">金金王</el-dropdown-item>
                            <el-dropdown-item command="罗斯福">罗斯福</el-dropdown-item>
                            <el-dropdown-item command="张伯伦">张伯伦</el-dropdown-item>
                            <el-dropdown-item command="丘吉尔">丘吉尔</el-dropdown-item>
                            <el-dropdown-item command="约翰逊">约翰逊</el-dropdown-item>
                            <el-dropdown-item command="三熊">三熊</el-dropdown-item> -->
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="li" style="justify-content: space-around;">
                <mt-button size="normal" @click.native="cancel">取消</mt-button>
                <mt-button size="normal" @click.native="define">确定</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui' // mintui
export default {
    data() {
        return {
            value1: '',
            value2: '',
            command: [],
            content: '',
            item: ['张召忠', '沈佳冰', '沈嘉彬']

        }
    },
    mounted() {
        // console.log(111)
        const { id } = this.$route.query
        this.$axios('http://58.22.125.43:8888/user/getProjectUser/' + id).then((res) => {
            this.item = res.data
        })
    },
    destroyed() {
        console.log(123)
    },
    methods: {
        handleCommand(command) {
            this.command.push(command)
            this.command = [...new Set(this.command)]
        },
        define() {
            const obj1 = {
                content: this.content,
                date1: this.value1,
                date2: this.value2,
                command: this.command
            }
            for (const value in obj1) {
                if (obj1[value].length === 0) {
                    Toast('每一项都不能为空')
                    return
                }
            }
            // 当不为空的时候
            const str = this.command.toString()
            const params = {
                projectId: this.$route.query.id,
                phone: this.$store.state.phone,
                recipient: str,
                taskStartTime: this.value1,
                taskEndTime: this.value2,
                TaskContent: this.content
            }
            console.log(this.value1)
            console.log(params)
            this.$axios.post('http://58.22.125.43:8888/task/addProjectTask', params).then((res) => {
                console.log(res)
                Toast(res.data.message)
                if (res.data.flag) {
                    this.cancel()
                }
                // setTimeout(() => {
                //     this.$router.go(0)
                // }, 1500)
            })
        },
        cancel() {
            this.$emit('cancel')
        }
    },
    props: {},
    components: {}
}
</script>

<style lang="stylus" scoped>
input
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
.assignTask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
}

.ul {
    position: fixed;
    width: 90%;
    height: 50%;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: #00baad solid 1px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .li {
        height: 16%;
        display: flex;
        align-items: center;
        padding: 5px;

        &:nth-last-child(1) {
            height: 20%;
        }

        div {
            padding: 5px;
        }

        // div:nth-child(1)
        div:nth-child(2) {
            border-left: 0;
        }
    }
}

 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
