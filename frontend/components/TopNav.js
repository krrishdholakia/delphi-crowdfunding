import React from 'react';
import PropTypes from 'prop-types';

const TopNav = ( { name } ) => {
    return (
        <div className="header-content"> 
            <h3 className = "header-title"> Delphi </h3>
            <div className = "header-actions">
                <h3 className = "header-actions-links"> FAQ </h3> 
                <h3 className = "header-actions-links"> Contact Us </h3>
            </div>
        </div>
    );
};

TopNav.propTypes = {
    name: PropTypes.string,
};


export default TopNav;
