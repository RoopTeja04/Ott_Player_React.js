import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from 'react-router-dom';

const popUp = ({onClose}) => {

  return (
    <div className='popup'>
      <button className='popup-close' onClick={onClose}><CloseIcon sx = {{fontSize:30}}/></button>
      <div>
        <h1 className='popup-msg'>Please make subcription to watch Movies</h1>
        <Link to="/subscription">
          <button className='sub-button'>
            <SubscriptionsIcon sx={{fontSize:45}}/>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default popUp;