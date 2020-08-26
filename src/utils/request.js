import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例(create an axios instance)
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // 跨域请求发送cookie（send cookies when cross-domain requests）
    timeout: 5000 // request timeout
})

// 请求拦截器（request interceptor）
service.interceptors.request.use(
    config => {
    // 发送之前做什么（do something before request is sent）

        if (store.getters.token) {
            // 让每个参数请求携带token（let each request carry token）
            // 自定义（['X-Token'] is a custom headers key）
            // 请实际情况更改（please modify it according to the actual situation）
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
    // 处理请求错误(do something with request error)
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器( response interceptor)
service.interceptors.response.use(
    /**
   * (如果你想获得http信息，或者状态)If you want to get http information such as headers or status
   * （请返回）Please return  response => response
  */

    /**
   * （通过自定义代码确定请求状态）Determine the request status by custom code
   * （这里只是一个例子）Here is just an example
   * （你还可以通过HTTP状态代码来判断状态） You can also judge the status by HTTP Status Code
   */
    response => {
        const res = response.data

        // （如果自定义代码不是20000，则判断为错误。）if the custom code is not 20000, it is judged as an error.
        if (res.code !== 20000) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            //               令牌非法，       其他客户端登陆                        令牌过期
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // （重新登陆）to re-login
                MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
                    confirmButtonText: 'Re-Login',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
