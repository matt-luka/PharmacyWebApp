import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import zhCN from 'antd/lib/locale/zh_CN'
import APP from './APP'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
        <ConfigProvider locale={zhCN}>
          <Router>
            <APP/>
          </Router>
        </ConfigProvider>
      </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
)