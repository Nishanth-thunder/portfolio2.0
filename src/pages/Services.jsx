import React from 'react'
import CardTagsBottom from '../components/cards/cardTagsBottom/CardTagsBottom'
import user from '../assets/js/data/user'

const Services = () => {
  return (
    <div className='services mb-5 pb-5'>
      <h1 className='app-heading1 text-center'>Services</h1>
      <div className="row mt-3">
        {
          user.services.map((service, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card border-0">
                <CardTagsBottom data={service} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services