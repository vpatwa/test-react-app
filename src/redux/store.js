import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
//import appReducer from './appReducer'

const store = createStore(
    //appReducer,
    rootReducer,
    composeWithDevTools(applyMiddleware(logger,thunk))
)
export default store