import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'


const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    // promise,
    logger
  )
)

export default store
