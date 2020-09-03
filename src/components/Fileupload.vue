
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
                    <el-cascader v-model="opValue1" :options="options1"
                     @change="handleChange1" ></el-cascader>
                </div>
            </div>
            <div class="li">
                <div>子文件夹</div>
                <div>
                    <select  v-model="sonFile" >
                        <option> 请选择</option>
                        <option v-for="(item, index) in selects" :key="index" :value="item">
                            {{item}}
                        </option>
                    </select>
                    <!-- <el-cascader v-model="opValue2" :options="options2"
                     :props="{ expandTrigger: 'hover' }"
                    @change="handleChange2"></el-cascader> -->
                </div>
            </div>
            <div class="li">
                <div>上传文件</div>
                <div></div>
            </div>
            <div class="li">
                <!--  max-count 1      =只能上传1      详情参考vantui-->
                <div>
                    <van-uploader  :max-size=10485760 max-count="1" @oversize='onOversize'
                    v-model="fileList" :after-read="afterRead" accept="*" >
                        <template #preview-cover="{ file }">
                            <div class="preview-cover van-ellipsis">{{ file.name }}</div>
                        </template>
                    </van-uploader>
                </div>
            </div>

            <div class="li">
                <div>任务内容</div>
                <div>
                    <textarea v-model="content" />
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
                            <span v-for="(item, index) in command" :key="index">{{command[index]}}</span>
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
            selects: [],
            // par
            // 后期整参
            id: this.$route.query.id,
            phone: this.$store.state.phone,
            type: '',
            theme: '',
            sonFile: '',
            file: {},
            taskContent: '',
            //  级联动
            options1: [
                {
                    value: '立项文件',
                    label: '立项文件',
                    children: [{
                        value: '委托书,中标通知书,纪要',
                        label: '委托书,中标通知书,纪要'
                    }, {
                        value: '合同',
                        label: '合同'
                    }]
                },
                {
                    value: '基础资料',
                    label: '基础资料',
                    children: [{
                        value: '上位规划',
                        label: '上位规划'
                    }, {
                        value: '测绘',
                        label: '测绘'
                    }, {
                        value: '勘察',
                        label: '勘察'
                    }, {
                        value: '提资CAD',
                        label: '提资CAD'
                    }
                    ]
                },
                {
                    value: '现场照片',
                    label: '现场照片',
                    children: [{
                        value: '现场照片',
                        label: '现场照片'
                    }]
                },
                {
                    value: '设计文件',
                    label: '设计文件',
                    children: [
                        {
                            value: '方案',
                            label: '方案'
                        },
                        {
                            value: '项目建议书,工可',
                            label: '项目建议书,工可'
                        },
                        {
                            value: '初步设计',
                            label: '初步设计'
                        },
                        {
                            value: '施工图设计',
                            label: '施工图设计'
                        },
                        {
                            value: '变更设计',
                            label: '变更设计'
                        }
                    ]
                },
                {
                    value: '批复文件',
                    label: '批复文件',
                    children: [
                        {
                            value: '方案,工可批复',
                            label: '方案,工可批复'
                        },
                        {
                            value: '初设批复',
                            label: '初设批复'
                        }, {
                            value: '施工图合格证书',
                            label: '施工图合格证书'
                        }
                    ]
                },
                {
                    value: '往来函件',
                    label: '往来函件',
                    children: [
                        {
                            label: '会议纪要',
                            value: '会议纪要'
                        },
                        {
                            label: '往来函件',
                            value: '往来函件'
                        },
                        {
                            label: '工作联系单,洽商单',
                            value: '工作联系单,洽商单'
                        }
                    ]
                },
                {
                    value: '竣工文件',
                    label: '竣工文件',
                    children: [
                        {
                            label: '中间验收记录',
                            value: '中间验收记录'
                        },
                        {
                            lavel: '竣工验收报告',
                            value: '竣工验收报告'
                        }
                    ]
                }
            ],
            options2: [
                {
                    value: '11',
                    label: '11'
                }
            ],
            // options3: [
            //     {
            //         value: 'zhinan',
            //         label: '指南'
            //     },
            //     {
            //         value: 'zujian',
            //         label: '组件'
            //     },
            //     {
            //         value: 'ziyuan',
            //         label: '资源'
            //     }
            // ],
            // 上传
            fileList: [
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
        define() {
            // console.log(this.type, this.theme, this.sonFile)
            // const params = new FormData()
            // params.append('projectId', this.id)
            // params.append('phone', this.phone)
            // console.log(params)
            const config = {
                // 添加请求头
                headers: { 'Content-Type': 'multipart/form-data' },
                // 添加上传进度监听事件
                onUploadProgress: e => {
                    var completeProgress = ((e.loaded / e.total * 100) | 0) + '%'
                    this.progress = completeProgress
                }
            }
            const params = {
                projectId: this.id,
                phone: this.phone,
                type: this.type,
                theme: this.theme,
                sonFile: this.sonFile, // 否
                recipient: this.command, // 否
                taskStartTime: this.value1, // 否
                taskEndTime: this.value2, // 否
                taskContent: this.content, // 否
                file: this.file
            }
            console.log(params)
            this.$axios.post('http://58.22.125.43:8888/file/fileupload', params, config).then((res) => {
                console.log(res)
            })
        },
        cancel() {
            // this.$emit('cancel')

        },
        // 级联
        handleChange1(value) {
            this.opValue1 = value[0]
            // console.log(value)
            // console.log(value)
            // console.log(value[0])
            // console.log(value[1])
            this.type = value[0]
            this.theme = value[1]
            const params = {
                id: this.$route.query.id,
                type: value[0],
                theme: value[1]
            }
            console.log(params)
            this.$axios.post('http://58.22.125.43:8888/file/getsonFileName', params).then((res) => {
                // console.log(res.data)
                // console.log(this.options2)
                this.selects = res.data
                // console.log(this.options2)
                // this.options2 = []
                // console.log(this.options1)
                // console.log(this.options2)
                // console.log(this.options2)
            })
        },
        handleChange2(value) {
            this.opValue2 = value[0]
        },
        // handleChange3(value) {
        //     this.opValue3 = value[0]
        // },
        // 上传文件
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.dir(file)
            console.log(file.content)
            this.file = file.content
        },
        onOversize() {
            console.log(111)
        }
    }
}
</script>

<style lang="stylus" scoped>
select{
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
}
textarea {
    background-color: #FFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    color: #606266;
    font-size: inherit;
    padding: 0 15px;
    height: 100px;
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
        // border-bottom:1px solid gray ;
        border-bottom: 1px solid #dcdfe6
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

 .preview-cover {
    position: absolute;
    box-sizing: border-box;
    bottom: 0;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
</style>
