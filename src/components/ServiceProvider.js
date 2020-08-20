import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchProviders } from '../redux'
import defaultImg from '../images/default-img.jpg'
const liStyle =
{
    display : 'flex'
};

function ServiceProvider({providerData, fetchProviders}) {
    useEffect(()=>{
        fetchProviders()
    },[])
    console.log(providerData)
    return providerData.loading 
        ? (<h2> Loading</h2>)
        : providerData.error ? (<h2> providerData.error</h2>)
        : (<div>
            <h2>Results</h2>
            <div>
                { 
                  providerData && 
                  providerData.data &&
                  providerData.data.map((provider,index) =>                   
                  <div>
                      {/* { provider.attributes.profile-image != null ? 'https://inquicker-iqapp-uploads-staging.s3.amazonaws.com/profile/practitioner/iqp_profile_1527.jpg?1550354381': defaultImg } */}
                      <div>
                        <div>
                            <img src={ provider.attributes["profile-image"] != null ? provider.attributes["profile-image"] : defaultImg } width="50" height="30" />
                        </div>
                        <div>
                            <p> { provider.attributes.name } </p>
                            <div>
                            <ul> { provider.attributes.subspecialties && provider.attributes.subspecialties.map(sub => <li style={liStyle}> {sub}</li>) } </ul> 
                            </div>
                        </div>
                      </div>
                  </div>)
                }
            </div>
        </div>)
}


const mapStateToProps = (state) => {
    const { providers ,filterSchedules } = state.provider
    console.log(filterSchedules)
    return {
        providerData : filterSchedules.length == 0 ? providers : filterSchedules     
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchProviders : () => dispatch(fetchProviders())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ServiceProvider)