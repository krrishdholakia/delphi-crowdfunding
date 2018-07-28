import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import TopNav from '../components/TopNav';
import MainContent from '../components/MainContent';

const AppContainer = ({ name }) => {
    console.log("reaches AppContainer")
    return (
        <div>
            {/* <Title name={name} /> */}
            <TopNav name={name}/>
            <MainContent/>
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
