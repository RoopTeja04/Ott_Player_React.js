import React from 'react'
import NavBar from '../playNav/NavBar'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Subscription = () => {
  return (
    <>
        <NavBar/>
        <div className='subscription'>
          <div className='sub-plans'>
            <h1 className='plan-name'>Monthly Plan</h1>
            <div className='plan-features'>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>upto 720p clarity</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>Download movies upto 720p</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>less Number of ads</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>Setero Quality of audio</p>
              </div>
            </div>
            <p className='price-sub'>₹ 99/-</p>
            <button className='clam-now' type='submit'>Clam Now</button>
          </div>
          <div className='sub-plans'>
          <h1 className='plan-name'>Half Year Plan</h1>
            <div className='plan-features'>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>upto 1080p & 2k clarity</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>Download movies upto 1080p</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>No Ads</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>Dolby quality audio</p>
              </div>
            </div>
            <p className='price-sub'>₹ 199/-</p>
            <button className='clam-now' type='submit'>Clam Now</button>
          </div>
          <div className='sub-plans'>
          <h1 className='plan-name'>year Plan</h1>
            <div className='plan-features'>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>upto 4K clarity</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>Download movies upto 4k</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>No ads</p>
              </div>
              <div className='plan-features-sub'>
                <CheckCircleIcon/>
                <p className='plan-features-des'>Dolby 4.1 Quality of audio</p>
              </div>
            </div>
            <p className='price-sub'>₹ 300/-</p>
            <button className='clam-now' type='submit'>Clam Now</button>
          </div>
        </div>
    </>
  )
}

export default Subscription