// import React from 'react'
// import { Route, Switch } from 'react-router-dom'

import routes from './routes'
import renderRoutes from './utils/render-routes'


import './styles/layout.less'
import './styles/login.less'
import './styles/user.less'
import './styles/order.less'
import './styles/pay.less'

export default function APP() {
  return renderRoutes(routes)
}
