import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    meta: { title: '登录' },
    hidden: true
  },

  {
    path: '/register',
    component: () => import('@/views/login/register'),
    meta: { title: '注册' },
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: () => import('@/views/front-end-system/home-page'),
    meta: { title: '首页' },
    hidden: true
  },

  {
    path: '/personal-homepage',
    component: () => import('@/views/front-end-system/personal-homepage'),
    meta: { title: '个人主页' },
    hidden: true
  },

  {
    path: '/video-page',
    component: () => import('@/views/front-end-system/video-page'),
    meta: { title: '视频' },
    hidden: true
  },

  {
    path: '/video-show',
    name: 'video-show',
    component: () => import('@/views/front-end-system/video-show'),
    meta: { title: '视频' },
    hidden: true
  },

  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: '首页', icon: 'dashboard' }  //
  //   }]
  // },

  {
    path: '/backend-system',
    component: Layout,
    redirect: '/example/table',
    name: 'sysManage',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/backend-system/user'),
        meta: { title: '用户管理', icon: 'table' }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/backend-system/role'),
        meta: { title: '角色管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
