import { 
  FETCH_PROVIDER_REQUEST,
  FETCH_PROVIDER_SUCCESS,
  FETCH_PROVIDER_FAILURE,
  FETCH_SERVICE_PROVIDERS
} from './serviceProvideTypes'

const initialState = {
  loading: false,
  providers: [],
  filterSchedules: [],
  error: ''
}

 const providerReducer = (state = initialState,action) => {
    switch(action.type)
    {
        case FETCH_PROVIDER_REQUEST : 
            return {
              ...state,              
              loading : true
            }
        case FETCH_PROVIDER_SUCCESS : 
            return {
              ...state,              
              loading : false,
              //providers : [...state.providers, action.payload],
              providers : action.payload,
              error : '',
            }
        case FETCH_PROVIDER_FAILURE : 
            return {
              ...state,
              loading : false,
              providers : [],
              error : action.payload
            }  
        case FETCH_SERVICE_PROVIDERS :
              console.log(state)                        
              return Object.assign({},state, {
                ...state,   
                filterSchedules : state.providers.data
                    .filter(d => d.relationships 
                     && d.relationships.schedules 
                     && d.relationships.schedules.data.filter(x => x.id ==
                         state.providers.included
                         .filter(p => p.type == "schedules" && p.attributes.service == action.payload)
                         .map(a => a.id)[0]))
              })
              
        default : return state
    }
 }

 export default providerReducer