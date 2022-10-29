import React from 'react';
import image from "./../imgs/image.jpg"
import Social from "./Social"

function AboutLeft() {

    return(
        <section className='AboutLeft'>
            <img className='profile' src={image}  />
            <h3>Aden Waller</h3>
            <Social/>
        </section>
    );
    
}
export default AboutLeft;