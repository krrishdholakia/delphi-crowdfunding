import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import TopNav from '../components/TopNav';
import MainContent from '../components/MainContent';
import FAQ from '../components/FAQ';
import ContactUs from '../components/ContactUs';
import {BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";

const AppContainer = ({ name }) => {
    console.log("reaches AppContainer")
    return (
        <div>
            <TopNav/>
            <Switch>
                <Route exact path="/" component={MainContent}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/contactus" component={ContactUs}/>
            </Switch>
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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer));
