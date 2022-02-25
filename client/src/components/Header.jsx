import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return(
    <div className='Header'>
  <div className='linkContainer'>
    <FontAwesomeIcon className='compassIcon'icon={faCompass}/>
    <div className='logo'>
      insertcompany
    </div>

  </div>
</div>
  )

}

export default Header;