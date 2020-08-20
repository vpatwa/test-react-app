import axios from 'axios'
import {
    FETCH_SERVICE_REQUEST,
    FETCH_SERVICE_SUCCESS,
    FETCH_SERVICE_FAILURE,
    FETCH_SERVICE_PROVIDERS
} from './itemserviceTypes'

export const fetchServices = () => {
    const url = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services'
    return (dispatch) => {
        dispatch(fetchRequestData())
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
            var services = res.data
            dispatch(fetchRequestSuccess(services))
        })
        .catch(err => {
            dispatch(fetchRequestError(err.message))
        })
    }
}



export const fetchRequestData = () => {
    return {
        type : FETCH_SERVICE_REQUEST
    }
}

export const fetchRequestSuccess = data => {
    return {
        type : FETCH_SERVICE_SUCCESS,
        payload: data
    }
}

export const fetchRequestError = error => {
    return {
        type: FETCH_SERVICE_FAILURE,
        payload: error
    }
}