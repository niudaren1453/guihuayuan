<template>
    <div class="login">
        <mt-header title="设计院"></mt-header>
        <!-- 页面内容 -->
        <div style="padding: 20px;font-size:20px;text-align: center;">手机登陆</div>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone">
            <mt-button
                type="primary"
                size="normal"
                :disabled="isTimer"
                @click.native="handleGetCode"
            >{{codeText}}</mt-button>
        </mt-field>
        <mt-field label="验证码" :readonly='isReadonly' v-model="captcha" :placeholder="isReadonly?'请获取验证码':'请输入验证码'"></mt-field>
        <div style=" align-items: center; box-sizing: border-box;
            display: flex; font-size: 16px;line-height: 1;min-height: inherit;
            overflow: hidden;padding: 0 10px;width: 100%; height:30px">
        <!-- <input type="checkbox" :checked="isChecked"> <label>记住账号 </label> -->
        </div>
        <mt-button type="primary" :disabled="isLogin" size="large" @click.native="handleLogin">登陆</mt-button>
            <!-- {{this.$store.state.phone}} -->
            <!-- <mt-button type="primary" size="large" @click.native="handleTestSet">get</mt-button> -->
            <!-- <mt-button type="primary"  size="large" @click.native="handleTestSet">set</mt-button> -->
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { setToken, getToken } from '@/utils/auth.js'
export default {
    name: 'login',
    data() {
        return {
            codeText: '获取验证码', // 获取验证码按钮的文本内容
            loginInfo: {}, // 登录信息
            phone: '', // 手机号-v-m绑定
            captcha: '', // 验证码-v-m绑定
            isTimer: true, // 是否禁用获取验证码按钮
            isLogin: true, // 是否禁用登录按钮
            // popupVisible: true, // 是否
            isReadonly: true, // 是否可编辑,
            isChecked: false, // 是否选中登陆状态
            time: 0
        }
    },
    mounted() {
        const phone = getToken()
        if (phone === undefined) {
            return
        }
        this.phone = phone
    },
    methods: {
        // 获取验证码按钮
        handleGetCode() {
            // 是否添加正则
            // Toast('请输入正确的手机号')
            // -----------------------------
            this.$axios
                .get(
                    'http://58.22.125.43:8888/validatecode/send4Login?telephone=' +
                        this.phone
                )
                .then((res) => {
                    console.log(res)
                    if (!res.data.flag) {
                        Toast('请输入正确的手机号')
                    }
                })
            let time = 60 // 60m
            this.isTimer = true // 是否禁用计时器
            this.codeText = time + '秒后再获取' // 计时器按钮文本
            this.isReadonly = false
            // 计时器倒计时
            const timer = setInterval(() => {
                if (time === 0) {
                    clearInterval(timer) // 清除计时器
                    this.codeText = '获取验证码'
                    this.isTimer = false
                } else {
                    time--
                    this.time = time
                    this.codeText = time + '秒后再获取'
                }
            }, 1000)
        },
        handleLogin() {
            // 登录按钮，      后台交互
            // console.log(111)
            const validateCode = this.captcha
            const telephone = this.phone
            const params = { validateCode, telephone }
            this.captcha = ''
            this.$axios // --------------------------------------parmas
                .post('http://58.22.125.43:8888/login/mobileLogin', params)
                .then((res) => {
                    console.log(res)
                    if (res.data.flag) {
                        this.$store.state.phone = telephone
                        Toast(res.data.message)
                        // if (this.isChecked) {
                        // console.log(telephone)
                        setToken(telephone)
                        // }
                        setTimeout(() => {
                            this.$router.push({ path: '/index/project' })
                            // console.log(1)
                        }, 1500)
                    } else {
                        console.log('登录失败')
                        Toast(res.data.message)
                    }
                })
        },
        handleTestSet() {
            setToken(18702762444)
        }
        // handleTestGet() {
        //     const as = getToken()
        //     console.log(as)
        // }
    },
    watch: {
        captcha() {
            // 监听captcha     ，当他验证码长度等于4的时候解锁
            if (this.captcha.length === 6) {
                console.log('长度满足')
                this.isLogin = false
            } else {
                this.isLogin = true
            }
        },
        phone() {
            // 监听 phone     判断手机是否符合标准
            if (this.phone.length === 11 && this.time === 0) {
                console.log('手机长度满足')
                this.isTimer = false
            } else {
                this.isTimer = true
            }
        }
    },
    components: {}
}
</script>

<style lang="stylus" scoped>
.mint-header {
    background: rgb(0, 186, 173);
    color: #fff;
}
</style>
