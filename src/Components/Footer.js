import React from 'react';
import Navbar from './Navbar';
import Social from './Social';

function Footer() {

    return(
        <footer>
            <div>
                <h3 className='company-name'>Aden</h3>
                <p className='company-dec'>Python Developer</p>
            </div>
            <div>
                <h3>Pages</h3>
                <Navbar/>
            </div>
            <div>
                <h3>Contacts</h3>
                <a href='mailto:Support@aden.com'>support@aden.com</a>
            </div>
            <Social/>
        </footer>
    );
    
}
export default Footer;