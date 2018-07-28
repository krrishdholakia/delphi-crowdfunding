import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TopNav = () => {
    return (
        <div className="header-content"> 
            <Link to="/" style={{ textDecoration: 'none' }}> <h3 className = "header-title"> Delphi </h3> </Link>
            <div className = "header-actions">
                <Link to="/faq" style={{ textDecoration: 'none' }}> <h3 className = "header-actions-links"> FAQ </h3> </Link>
                <Link to="/contactus" style={{ textDecoration: 'none' }}> <h3 className = "header-actions-links"> Contact Us </h3> </Link>
            </div>
        </div>
    );
};

TopNav.propTypes = {
    name: PropTypes.string,
};


export default TopNav;
