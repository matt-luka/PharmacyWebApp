import {
  LineChartOutlined,
  UserOutlined,
  TeamOutlined,
  MailOutlined,
  // ApartmentOutlined,
  CloudUploadOutlined,
  SettingOutlined,
  ProfileOutlined
} from '@ant-design/icons'

import users from '../views/users'
import userInfo from '../views/users/userInfo'
import login from '../views/login'
import layout from '../layout'
import createOrderIndex from '../views/createOrder/index'
import createOrder from '../views/createOrder/createOrder'
import historyOrder from '../views/createOrder/historyOrder'
const routes =[
  {
    path: '/login',
    component: login,
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/createOrder',
        component: createOrderIndex,
        meta: {
          title: 'Order',
          icon: ProfileOutlined,
        },
        children: [
          {
            path: '/createOrder/createOrder/',
            component: createOrder,
            meta: {
              title: 'Create Order',
            },
          },
          {
            path: '/createOrder/history/',
            component: historyOrder,
            meta: {
              title: 'History Order',
            },
          }
        ]
      },
      {
        path: '/users',
        component: users,
        meta: {
          title: 'Profile',
          icon: UserOutlined,
        },
        children: [
          {
            path: '/users/userInfo',
            component: userInfo,
            meta: {
              title: 'Profile',
            },
          },
        ]
      }
    ]
  },
]

export default routes
