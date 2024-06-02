const routes = [
  {
    path: '/',
    component: () => import('src/pages/HomePage.vue'),
  },
  {
    path: '/processing',
    component: () => import('src/pages/Processing.vue'),
  },
  {
    path: '/registration',
    component: () => import('src/pages/Registration.vue'),
  },
  {
    path: '/login',
    component: () => import('src/pages/Login.vue'),
  },
  {
    path: '/test',
    component: () => import('src/pages/BackendTest.vue'),
  },
  {
    path: '/about',
    component: () => import('src/pages/AboutUs.vue'),
  },
  {
    path: '/contact',
    component: () => import('src/pages/ContactUs.vue'),
  },
  {
    path: '/city',
    children: [
      {
        path: 'astana',
        component: () => import('src/cities/Astana.vue')
      },
      {
        path: 'almaty',
        component: () => import('src/cities/Almaty.vue')
      },
      {
        path: 'shymkent',
        component: () => import('src/cities/Shymkent.vue')
      }
    ]
  },
  {
    path: '/air',
    children: [
      {
        path: 'city',
        component: () => import('src/components/Flights/Flights.vue')
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
