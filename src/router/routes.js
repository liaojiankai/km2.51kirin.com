import NotFind from '@/container/err/not-find'
import Index from '../container/index'
import AppMain from '../container/app-main'
import Mineral from '../container/mineral'

const routers = [
  {
    path: '/',
    component: AppMain,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: Index
      },
      {
        path: 'planet',
        component: Mineral
      }
    ]
  },

  {
    path: '*',
    component: NotFind
  }
]

export default routers
