import {
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  FETCH_SERVICE_PROVIDERS
} from './itemserviceTypes'

const initialState = {
    loading: false,
    services: [],
    providers : [],
    error: ''
}

 const serviceReducer = (state = initialState,action) => {
    switch(action.type)
    {
        case FETCH_SERVICE_REQUEST : 
            return {
              ...state,
              loading : true
            }
        case FETCH_SERVICE_SUCCESS : 
            return {
              ...state,           
              loading : false,
              services : action.payload,
              error : ''
            }
        case FETCH_SERVICE_FAILURE : 
            return {
              ...state,
              loading : false,
              services : [],
              error : action.payload
            }
              
        default : return state
    }
 }

 export default serviceReducer