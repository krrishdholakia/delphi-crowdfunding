import React from 'react';
import PropTypes from 'prop-types';


class ContactUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact-us-content"> 
                <h3 className="contact-us-title"> Send us an email </h3> 
                <h3 className="contact-us-email"> delphiCrowdfunding@gmail.com </h3> 
                <p style={{ fontSize: '20px' }}> ❤️ </p> 
            </div>
        );
    }   
};

ContactUs.propTypes = {
    name: PropTypes.string,
};


export default ContactUs;
