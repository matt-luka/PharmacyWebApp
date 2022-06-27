import React from 'react'
import renderRoutes from '../../utils/render-routes'

export default function index(props) {
  return (
    <>
      {renderRoutes(props.route.children)}
    </>
  )
}
