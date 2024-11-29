export default [
  {
    label: '仪表盘',
    name: 'home',
    icon: 'i-tabler:dashboard',
  },
  {
    label: '首页',
    name: 'index',
    path: 'index',
    parent: 'home',
    component: () => import('../../pages/home/index.vue'),
  },
]
