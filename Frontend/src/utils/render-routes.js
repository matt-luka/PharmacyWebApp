import React from 'react'

import { Redirect, Route, Switch } from "react-router-dom"

const renderRoutes = routes => {
  return (
    <Switch>
      {
        routes.map(route => (
          (
            <Route
            key={route.path}
            path={ route.path }
            render={(props) => (
              route.render
              ? route.render(props)
              : <route.component {...props} route={route} />
            )} />
          )
        ))
      }
      <Redirect to={'/statistics/usersSta'} />
    </Switch>
  )
  
}

export default renderRoutes