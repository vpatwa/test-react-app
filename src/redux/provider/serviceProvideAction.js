import axios from 'axios'
import { 
    FETCH_PROVIDER_REQUEST,
    FETCH_PROVIDER_SUCCESS,
    FETCH_PROVIDER_FAILURE,
    FETCH_SERVICE_PROVIDERS
} from './serviceProvideTypes'

export const fetchProviders = () => {
    const url = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10'
    return (dispatch) => {
        dispatch(fetchProviderRequest())
        axios.get(url,
            {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                }
            }
        ).then(res => {            
            dispatch(providerRequestSuccess(res.data))
        })
        .catch(err => {
            dispatch(providerRequestError(err.message))
        })
    }
}

export const fetchServiceProviders = name => {
    return {
        type : FETCH_SERVICE_PROVIDERS,
        payload : name
    }
}

export const fetchProviderRequest = () => {
    return {
        type : FETCH_PROVIDER_REQUEST
    }
}

export const providerRequestSuccess = data => {
    return {
        type : FETCH_PROVIDER_SUCCESS,
        payload: data
    }
}

export const providerRequestError = error => {
    return {
        type: FETCH_PROVIDER_FAILURE,
        payload: error
    }
}