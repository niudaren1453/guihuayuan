export default {
    path: '/information',
    component: () => import('@/views/information'),
    name: 'information',
    meta: { requiresAuth: true }
    // children: [
    //     {
    //         path: 'projectapproval',
    //         component: () => import('@/views/information/projectApproval'),
    //         children: [
    //             {
    //                 path: 'electronicsfile',
    //                 component: () => import('@/views/information/projectApproval/ElectronicsFile'),
    //                 name: 'electronicsfile1'
    //             },
    //             {
    //                 path: 'entityfile',
    //                 component: () => import('@/views/information/projectApproval/EntityFile'),
    //                 name: 'entityfile1'
    //             },
    //             {
    //                 path: '/information/projectapproval',
    //                 redirect: '/information/projectapproval/electronicsfile'
    //             }
    //         ]
    //     },
    //     {
    //         path: 'contract',
    //         component: () => import('@/views/information/projectContract'),
    //         children: [
    //             {
    //                 path: 'electronicsfile',
    //                 name: 'electronicsfile2',
    //                 component: () => import('@/views/information/projectContract/ElectronicsFile')
    //             },
    //             {
    //                 path: 'entityfile',
    //                 name: 'entityfile2',
    //                 component: () => import('@/views/information/projectContract/EntityFile')
    //             },
    //             {
    //                 path: '/information/contract',
    //                 redirect: '/information/contract/electronicsfile'
    //             }
    //         ]
    //     },
    //     {
    //         path: '/information',
    //         redirect: '/information/projectapproval/electronicsfile'
    //     }
    // ]
}