import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './modules/main'
import information from './modules/information'
import details from './modules/details'
import log from './modules/log'
import uploadFile from './modules/uploadFile'
import login from './modules/login'
import task from './modules/task'
Vue.use(VueRouter)
// const routes = [
//     { path: '/', redirect: '/index' },
//     { path: '/index', component: Main },
//     {
//         // 详情页面
//         path: '/details',
//         component: () => import('@/views/details'),
//         children: [
//             {
//                 path: 'task',
//                 component: () => import('@/views/details/Task')
//             },
//             {
//                 path: 'process',
//                 component: () => import('@/views/details/Process')
//             },
//             {
//                 path: 'file',
//                 component: () => import('@/views/details/file'),
//                 children: [
//                     {
//                         path: 'electronicsfile',
//                         component: () => import('@/views/details/file/ElectronicsFile')
//                     },
//                     {
//                         path: 'entity',
//                         component: () => import('@/views/details/file/Entity')
//                     },
//                     {
//                         path: '/details/file',
//                         redirect: '/details/file/electronicsfile'
//                     }
//                 ]
//             },
//             {
//                 path: 'personnel',
//                 component: () => import('@/views/details/Personnel')
//             },
//             {
//                 path: 'overview',
//                 component: () => import('@/views/details/Overview')
//             },
//             {
//                 path: '/details',
//                 redirect: '/details/task'
//             }
//         ]
//     },
//     {
//         // 项目页
//         path: '/information',
//         component: () => import('@/views/information'),
//         children: [
//             {
//                 path: 'projectapproval',
//                 component: () => import('@/views/information/projectApproval'),
//                 children: [
//                     {
//                         path: 'electronicsfile',
//                         component: () => import('@/views/information/projectApproval/ElectronicsFile')
//                     },
//                     {
//                         path: 'entityfile',
//                         component: () => import('@/views/information/projectApproval/EntityFile')
//                     },
//                     {
//                         path: '/information/projectapproval',
//                         redirect: '/information/projectapproval/electronicsfile'
//                     }
//                 ]
//             },
//             {
//                 path: 'contract',
//                 component: () => import('@/views/information/projectContract'),
//                 children: [
//                     {
//                         path: 'electronicsfile',
//                         component: () => import('@/views/information/projectContract/ElectronicsFile')
//                     },
//                     {
//                         path: 'entityfile',
//                         component: () => import('@/views/information/projectContract/EntityFile')
//                     },
//                     {
//                         path: '/information/contract',
//                         redirect: '/information/contract/electronicsfile'
//                     }
//                 ]
//             },
//             {
//                 path: '/information',
//                 redirect: '/information/projectapproval/electronicsfile'
//             }
//         ]
//     },
//     {
//         path: '/*',
//         redirect: '/index'
//     }
// ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', redirect: '/login' },
        main,
        information,
        details,
        log,
        uploadFile,
        login,
        task,
        {
            path: '/*',
            redirect: '/index' // 可以考虑做个404 页面
        }
    ]
})

export default router
