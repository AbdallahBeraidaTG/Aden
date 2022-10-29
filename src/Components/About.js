import React from 'react';
import AboutRight from './AboutRight';
import AboutLeft from './AboutLeft';

function About() {

    return(
        <section className='about'>
            <h2>About Me</h2>
            <div className='about-content'>
                <AboutLeft/>
                <AboutRight/>
            </div>
        </section>
    );
    
}
export default About;