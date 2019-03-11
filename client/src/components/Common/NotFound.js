import React from 'react'
import { Link } from 'react-router-dom';

import NotFoundImage from '../../../assets/images/page-not-found.png';

const NotFound = () => {
  return (
    <div className="text-center">
    <img src={ NotFoundImage } className="notfound"/>
        <div className="text-center">
        <Link to="/dashboard"><button className="button_1 text-center">Back To Dashboard</button></Link>
        </div>
          </div>
  )
}

export default NotFound;