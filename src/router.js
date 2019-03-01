import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: '首页',
        component: () => import('@/views/dashboard'),
        meta: {icon: 'dashboard'}
      },
      {
        path: '/component',
        name: '组件',
        component: () => import('@/components/route-view'),
        meta: {icon: 'component'},
        children: [
          {
            path: '/component/json',
            name: 'JSON编辑器',
            component: () => import('@/views/component/jsonEditor'),
            meta: {}
          },
          {
            path: '/component/countTo',
            name: 'countTo',
            component: () => import('@/views/component/countTo'),
            meta: {}
          },
          {
            path: '/component/dialog/drag',
            name: 'Dialog拖拽',
            component: () => import('@/views/component/dragDialog'),
            meta: {}
          },
          {
            path: '/component//list/drag',
            name: '列表拖拽',
            component: () => import('@/views/component/dndList'),
            meta: {}
          }
        ]
      },
      {
        path: '/permission',
        name: '权限测试',
        component: () => import('@/components/route-view'),
        meta: {icon: 'permission'},
        children: [
          {
            path: '/permission/page',
            name: '页面权限',
            component: () => import('@/views/test.vue'),
            meta: {}
          },
          {
            path: '/permission/directive',
            name: '指令权限',
            component: () => import('@/views/test.vue'),
            meta: {}
          }
        ]
      },
      {
        path: '/menu',
        name: '菜单嵌套',
        component: () => import('@/components/route-view'),
        meta: {icon: 'menu'},
        children: [
          {
            path: '/permission/A',
            name: '菜单A',
            component: () => import('@/components/route-view'),
            meta: {},
            children: [
              {
                path: '/permission/A/1',
                name: '子菜单A一',
                component: () => import('@/views/test.vue'),
                meta: {}
              },
              {
                path: '/permission/A/2',
                name: '子菜单A二',
                component: () => import('@/views/test.vue'),
                meta: {}
              }
            ]
          },
          {
            path: '/permission/B',
            name: '菜单B',
            component: () => import('@/components/route-view'),
            meta: {},
            children: [
              {
                path: '/permission/B/1',
                name: '子菜单B一',
                component: () => import('@/views/test.vue'),
                meta: {}
              },
              {
                path: '/permission/B/2',
                name: '子菜单B二',
                component: () => import('@/views/test.vue'),
                meta: {}
              }
            ]
          }
        ]
      }
    ]
  }
];

export default new Router({
  routes
});
