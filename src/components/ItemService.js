import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchServices, fetchServiceProviders } from '../redux'

const ulStyle =
{
    display : 'inline-grid'
};

const liStyle =
{
    display : 'flex'
};

function ItemService({serviceData, fetchServices,fetchServiceProviders }) {
    useEffect(()=>{
        fetchServices()
    },[])   
    
    return serviceData.loading 
        ? (<h2> Loading</h2>)
        : serviceData.error ? (<h2> serviceData.error</h2>)
        : (<div>
            <h2>Controls</h2>
            <ul style={ulStyle}>
                { 
                  serviceData && 
                  serviceData.services.data &&
                  serviceData.services.data.map((service) => <li style={liStyle} onClick={ () => fetchServiceProviders(service.attributes.name) }> { service.attributes.name } </li>)
                }
            </ul>
        </div>)
}

const mapStateToProps = (state) => {
    return {
        serviceData : state.service       
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchServices : () => dispatch(fetchServices()),
        fetchServiceProviders : name => dispatch(fetchServiceProviders(name))              
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemService)
