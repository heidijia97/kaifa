// 路由懒加载
const Msite = () => import('../pages/Msite/Msite.vue')
const List = () => import('../pages/List/List.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Distinguish = () => import('../pages/Distinguish/Distinguish.vue')
const Shopping = () => import('../pages/Shopping/Shopping.vue')

export default [{
    path: '/msite',
    component: Msite
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/distinguish',
    component: Distinguish
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: '/msite'
  }
]