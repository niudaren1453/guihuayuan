import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { getToken } from '../utils/auth'

Vue.use(Vuex)

let myPhone = getToken()
if (myPhone === undefined) {
    myPhone = 11111111111
}
console.log(myPhone)
export default new Vuex.Store({
    state: {
        phone: myPhone, // 暂时写死  ，王金成phone
        informationList: [],
        informationListCache: []
    },
    mutations: {
        // 让inf使用缓存的数组
        changeInformationList(state, e) {
            state.informationList = state.informationListCache[e - 1]
        },
        // 获取inf数组
        getInformationList (state, A) {
            // A 数组    0 list    1 index
            state.informationList = A[0]
            state.informationListCache[A[1]] = A[0]
        }
    },
    actions: {
        // 异步获取inf数组
        getInformationListFun (context, P) {
            // P 参数对象 属性 type 和 id
            axios('http://58.22.125.43:8888/file/findFiles/' + P.type + '/' + P.id).then(
                (res) => {
                    // 评论添加一个对象属性Bool
                    for (let i = 0; i < res.data.length; i++) {
                        for (let j = 0; j < res.data[i].date.length; j++) {
                            // console.log(i + '' + j)
                            res.data[i].date[j].isShowComment = false
                            // 由于后端没有返回图片的src路径，固前台自己做判断对对象添加一个属性
                            // 1首先先截取后面的后缀
                            // 2经过后缀判断 ，用图片路径创建一个新的属性
                            // 3渲染的时候使用即可
                            // if (res.data[i].date[j].fileName.indexOf('.'))
                            // console.log(res.data[i].date[j].fileName)
                            // 以下是对后端返回处理结果
                            if (res.data[i].date[j].fileName.indexOf('.pptx') !== -1) {
                                res.data[i].date[j].fileImgSrc = 'http://qeiw9gjvi.bkt.clouddn.com/pptx.png'
                            } else if (res.data[i].date[j].fileName.indexOf('.xsls') !== -1) {
                                res.data[i].date[j].fileImgSrc = 'http://qeiw9gjvi.bkt.clouddn.com/Execl.png'
                            } else if (res.data[i].date[j].fileName.indexOf('.docx') !== -1) {
                                res.data[i].date[j].fileImgSrc = 'http://qeiw9gjvi.bkt.clouddn.com/word.png'
                            } else if (res.data[i].date[j].fileName.indexOf('.jpg') !== -1) {
                                res.data[i].date[j].fileImgSrc = 'http://qeiw9gjvi.bkt.clouddn.com/%E5%9B%BE%E7%89%87.png'
                            } else if (res.data[i].date[j].fileName.indexOf('.txt') !== -1) {
                                res.data[i].date[j].fileImgSrc = 'http://qeiw9gjvi.bkt.clouddn.com/txt.png'
                            } else if (res.data[i].date[j].fileName.indexOf('.pdf') !== -1) {
                                res.data[i].date[j].fileImgSrc = 'http://qeiw9gjvi.bkt.clouddn.com/pdf.png'
                            }
                        }
                    }
                    // 对图片SRc路径进行处理的功能
                    context.commit('getInformationList', [res.data, P.type - 1])
                })
        }
    },
    // 等功能逻辑组多的时候使用
    modules: {
    }
})
