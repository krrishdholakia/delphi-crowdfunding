import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import axios from 'axios';
class MainContent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
            email:"",
            response:"",
            errorEmail:"",
            errorQuestion:""
        }       
        
        this.handleEmail = this.handleEmail.bind(this)
        this.handleQuestion = this.handleQuestion.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        console.log("errorEmail: ", this.state.errorEmail)
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handleQuestion(e) {
        this.setState({response: e.target.value})
    }

    onSubmit() {
        console.log("email: ", this.state.email)
        console.log("response: ", this.state.response)

        let isValidEmail = false
        let isValidResponse = false

        console.log("initial isEmail stuff: ", isEmail(this.state.email))

        !isEmail(this.state.email) ? this.setState({errorEmail: "Enter valid email"}):(this.setState({errorEmail:""}), isValidEmail = true)
        this.state.response.length <= 2 ? this.setState({errorQuestion: "Enter valid response"}):(this.setState({errorQuestion:""}), isValidResponse = true)

        if (isValidEmail && isValidResponse) {
            console.log("isEmail stuff: ", isEmail(this.state.email))
            console.log("success!")
            console.log("axios: ", axios)
            axios.post(`https://delphi-crowdfunding.herokuapp.com/api/applicants/newApplicant`, this.state)
                .then(({ data }) => {
                        console.log("Data: ", data)
                })
                .catch((error) => {
                    console.log(error);
                  });
        } else {
            console.log("failure!")
        }
    }
    render() {
        const {errorEmail, errorQuestion} = this.state
        return (
            <div className="main-content"> 
                <h3 className = "main-title"> Traditional Crowdfunding made smart. </h3>
                <p className = "main-description">
                    Delphi is an attempt to use the convenience and safety of smart-contracts provided by the Ethereum blockchain network
                    in traditional crowdfunding platforms like Kickstarter and Indiegogo. 
                </p>
                <h3 className = "sign-up"> Sign Up for the Beta! </h3>
                <div className="sign-up-email-container">
                    <input type="email" className="sign-up-email" placeholder="Email Address.." onChange={this.handleEmail}/>
                    <div className="error">{this.state.errorEmail? this.state.errorEmail:null}</div>
                    </div>
                <div className="sign-up-question-container">
                    <textarea className="sign-up-question" placeholder="What kind of contract would you like with your patron/campaign creator?.." onChange={this.handleQuestion}/>
                    <div className="error">{this.state.errorQuestion? this.state.errorQuestion:null}</div>
                    <h3 className="sign-up-submit" onClick={this.onSubmit}> Sign Up! </h3>
                </div>
            </div>
        )
    }
};

MainContent.propTypes = {
    name: PropTypes.string,
};


export default MainContent;
