
<template>
    <div class="fileupload-tem wrap">
        <div class="ul">
            <div class="li">
                <span style="margin:0 auto">上传文件</span>
            </div>
            <div class="li">
                <div>项目编号</div>
                <div>1</div>
            </div>
            <div class="li">
                <div>手机号码</div>
                <div>136750664625</div>
            </div>
            <div class="li">
                <div>文件类型</div>
                <div>
                    <el-cascader v-model="opValue1" :options="options1" @change="handleChange1"></el-cascader>
                </div>
            </div>
            <div class="li">
                <div>文件主题</div>
                <div>
                    <el-cascader v-model="opValue2" :options="options2" @change="handleChange2"></el-cascader>
                </div>
            </div>
            <div class="li">
                <div>子文件夹</div>
                <div>
                    <el-cascader v-model="opValue3" :options="options3" @change="handleChange3"></el-cascader>
                </div>
            </div>
            <div class="li">
                <div>上传文件</div>
                <div></div>
            </div>
            <div class="li">
                <div>
                    <van-uploader :after-read="afterRead" />
                </div>
            </div>

            <template v-if="condition">
                <div class="li">
                    <div>任务内容</div>
                    <div>
                        <input type="text" v-model="content" />
                    </div>
                </div>
                <div class="li">
                    <div>开始时间</div>
                    <div>
                        <el-date-picker
                            value-format="yyyy-MM-dd HH:mm:ss"
                            v-model="value1"
                            type="datetime"
                            placeholder="选择日期时间"
                        ></el-date-picker>
                    </div>
                </div>

                <div class="li">
                    <div>结束时间</div>
                    <div>
                        <el-date-picker
                            value-format="yyyy-MM-dd HH:mm:ss"
                            v-model="value2"
                            type="datetime"
                            placeholder="选择日期时间"
                        ></el-date-picker>
                    </div>
                </div>
                <div class="li">
                    <div>任务接收人</div>
                    <div>
                        <!-- 下拉 -->
                        <el-dropdown @command="handleCommand">
                            <span class="el-dropdown-link">
                                <span
                                    v-for="(item, index) in command"
                                    :key="index"
                                >{{command[index]}}</span>
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item
                                    :command="item"
                                    v-for="(item, index) in item"
                                    :key="index"
                                >{{item}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </template>
            <div class="li">
                <div>
                    <mt-button size="normal" @click.native="showCondition">是否显示发布任务</mt-button>
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
export default {
    data() {
        return {
            id: this.$route.query.id,
            phone: this.$store.state.phone,
            value1: '',
            value2: '',
            command: [],
            condition: false,
            content: '',
            item: ['张召忠', '沈佳冰', '沈嘉彬'],
            value: [],
            opValue1: '',
            opValue2: '',
            opValue3: '',
            //  级联动
            options1: [
                {
                    value: 'zhinan',
                    label: '指南'
                },
                {
                    value: 'zujian',
                    label: '组件'
                },
                {
                    value: 'ziyuan',
                    label: '资源'
                }
            ],
            options2: [
                {
                    value: 'zhinan',
                    label: '指南'
                },
                {
                    value: 'zujian',
                    label: '组件'
                },
                {
                    value: 'ziyuan',
                    label: '资源'
                }
            ],
            options3: [
                {
                    value: 'zhinan',
                    label: '指南'
                },
                {
                    value: 'zujian',
                    label: '组件'
                },
                {
                    value: 'ziyuan',
                    label: '资源'
                }
            ],
            // 上传
            fileList: [
                {
                    url: 'https://img.yzcdn.cn/vant/leaf.jpg',
                    status: 'uploading',
                    message: '上传中...'
                },
                {
                    url: 'https://img.yzcdn.cn/vant/tree.jpg',
                    status: 'failed',
                    message: '上传失败'
                }
            ]
        }
    },
    components: {},

    methods: {
        // 发布任务显示
        showCondition() {
            this.condition = !this.condition
        },
        handleCommand(command) {
            this.command.push(command)
            this.command = [...new Set(this.command)]
        },
        define() {},
        cancel() {
            this.$emit('cancel')
        },
        // 级联
        handleChange1(value) {
            this.opValue1 = value[0]
        },
        handleChange2(value) {
            this.opValue2 = value[0]
        },
        handleChange3(value) {
            this.opValue3 = value[0]
        },
        // 上传文件
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file)
        }
    }
}
</script>

<style lang="stylus" scoped>
input {
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
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
}

.wrap {
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    width: 100%;
    overflow: hiddend;
    left: 0;
    right: 0;
    top: 234px;
    bottom: 40px;
    overflow: auto;
    border-bottom: 4px solid #e7e7e7;
}

.ul {
    margin: 5%;
    overflow: auto;
    width: 90%;
    background: #fff;
    top: 50%;
    left: 50%;
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
