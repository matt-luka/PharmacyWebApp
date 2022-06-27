/* create store */
import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import rootReducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
const store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)

export {store, persistor}