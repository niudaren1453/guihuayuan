export default {
    path: '/details',
    component: () => import('@/views/details'),
    children: [
        {
            path: 'task',
            component: () => import('@/views/details/Task')
        },
        {
            path: 'process',
            component: () => import('@/views/details/Process')
        },
        {
            path: 'file',
            component: () => import('@/views/details/file'),
            children: [
                {
                    path: 'electronicsfile',
                    component: () => import('@/views/details/file/ElectronicsFile')
                },
                {
                    path: 'entity',
                    component: () => import('@/views/details/file/Entity')
                },
                {
                    path: '/details/file',
                    redirect: '/details/file/electronicsfile'
                }
            ]
        },
        {
            path: 'personnel',
            component: () => import('@/views/details/Personnel')
        },
        {
            path: 'overview',
            component: () => import('@/views/details/Overview')
        },
        {
            path: '/details',
            redirect: '/details/task'
        }
    ]
}