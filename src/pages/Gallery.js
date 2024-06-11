import React from 'react';
import pic1 from '../images/pic1.jpeg';
import pic2 from '../images/pic2.jpeg'; 


export default function Gallery() {
    return (
        <div className="Gallery">
            <h1>GALLERY</h1>
            <h2> Some pictures from our travels</h2>
        <div className="gallery-images">
        <img src={pic1} alt="Description of pic1" className="gallery-image" />
        <img src={pic2} alt="Description of pic2" className="gallery-image" />
       
        {/* Add more images as needed */}
      </div>
        </div >
    );
}