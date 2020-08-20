import { combineReducers } from 'redux'
import serviceReducer  from './itemservice/itemserviceReducer'
import providerReducer  from './provider/serviceProviderReducer'

const rootReducer = combineReducers({
    service: serviceReducer,
    provider: providerReducer
})

export default rootReducer