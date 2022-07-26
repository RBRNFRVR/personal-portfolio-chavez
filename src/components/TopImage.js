import React from 'react';
import Photo from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/fotis-fotopoulos-SyvsTmuuZyM-unsplash.jpg'

export const TopImage = () => {
  return( 
     <div className='top-of-page'>
         <img src={Photo} className='top-image' alt=''/>
     </div>
  );
};
