/* Loading*/
import React from "react"
import Loadable from "react-loadable"

function Loading(props) {
  if (props.error) {
    return <div>Error<button onClick={ props.retry }>Retry</button></div>
  } else {
    return <div>Loading...</div>
  }
}

const withLoadable = component => Loadable({
  loader: component,
  loading: Loading
})

export default withLoadable