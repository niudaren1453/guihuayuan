
<template>
    <div class="Fileupload-tem">
        <form action="http://58.22.125.43:8888/file/fileupload" method="post" enctype="multipart/form-data">
            <span>文件上传</span>
            <table width="100%" height="150%" border="1px;">
                <tr>
                    <td>项目id:</td>
                    <td>
                        <input type="text" name="projectId" :value= this.$route.query.id disabled= true  />
                    </td>
                </tr>
                <tr>
                    <td>登录人手机号:</td>
                    <td>
                        <input type="text" name="phone" :value= this.$store.state.phone disabled= true />
                    </td>
                </tr>
                <tr>
                    <td>文件类型:</td>
                    <td>
                        <select onchange="Cname(this.value)" name="fileType">
                            <option>--请下拉选择--</option>
                            <option value="1">立项文件</option>
                            <option value="2">前期资料</option>
                            <option value="3">现场照片</option>
                            <option value="4">设计文件</option>
                            <option value="5">阶段审查</option>
                            <option value="6">过程文件</option>
                            <option value="7">归档竣工</option>
                            <option value="8">更多</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>文件主题:</td>
                    <td>
                        <select id="hobby" name="theme"></select>
                    </td>
                </tr>

                <tr>
                    <td>请选择要上传的文件:</td>
                    <td align="center">
                        <input type="file" name="file" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align="center">
                        <input type="submit" value="提交" />
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
/*
    8/10改写组件
    源文件./html.html
    js文件公共目录下的js fileupload
    来源于小熊
            */
export default {
    data() {
        return {
        }
    },
    components: {},
    mounted() {
        console.log(this.$route.query.id)
    },
    methods: {
    }
}
</script>

<style>
</style>
