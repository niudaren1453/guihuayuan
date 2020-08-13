import Main from '@/views/main'
export default {
    path: '/index',
    component: Main,
    children: [
        {
            path: 'mine',
            component: () => import('@/views/main/mine')
        },
        {
            path: 'project',
            component: () => import('@/views/main/project')
        },
        {
            path: 'notice',
            component: () => import('@/views/main/notice')
        },
        {
            path: '/index',
            redirect: '/index/project'
        }
    ]
}