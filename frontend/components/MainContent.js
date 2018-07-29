import React from 'react';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

class MainContent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
            email:"",
            response:"",
            errorEmail:"",
            errorQuestion:"",
            showSuccess: false,
            showFailure: false, 
            showFAQ1: false 
        }       
        
        this.handleEmail = this.handleEmail.bind(this)
        this.handleQuestion = this.handleQuestion.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleFAQ = this.handleFAQ.bind(this)
        console.log("errorEmail: ", this.state.errorEmail)
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }

    handleQuestion(e) {
        this.setState({response: e.target.value})
    }

    handleFAQ(e) {
        if (e == 1) {
            this.setState({showFAQ1: !this.state.showFAQ1})
        } 
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
                        this.setState({showSuccess: true})
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({showFailure: true})
                  });
        } else {
            console.log("failure!")
        }
    }
    render() {
        const {errorEmail, errorQuestion} = this.state
        return (
            <div className="main-content-container">
                <div className="main-content"> 
                    <h3 className = "main-title"> Traditional Crowdfunding made smart. </h3>
                    <p className = "main-description">
                        Delphi uses the convenience and safety of smart-contracts provided by the Ethereum blockchain network
                        in traditional crowdfunding platforms like Kickstarter and Indiegogo. 
                    </p>
                    <div>
                        <h3 onClick={() => this.handleFAQ(1)}> What are smart contracts ? </h3> 
                        <h3 style={{display: this.state.showFAQ1 ? 'block' : 'none'}}> Contracts which are built atop a blockchain. </h3>
                        <h3 onClick={() => this.handleFAQ(2)}> What are smart contracts ? </h3> 
                        <h3 style={{display: this.state.showFAQ1 ? 'block' : 'none'}}> Contracts which are built atop a blockchain. </h3>
                        <h3 onClick={() => this.handleFAQ(3)}> What are smart contracts ? </h3> 
                        <h3 style={{display: this.state.showFAQ1 ? 'block' : 'none'}}> Contracts which are built atop a blockchain. </h3>
                        <h3 onClick={() => this.handleFAQ(4)}> What are smart contracts ? </h3> 
                        <h3 style={{display: this.state.showFAQ1 ? 'block' : 'none'}}> Contracts which are built atop a blockchain. </h3>
                        <h3 onClick={() => this.handleFAQ(5)}> What are smart contracts ? </h3> 
                        <h3 style={{display: this.state.showFAQ1 ? 'block' : 'none'}}> Contracts which are built atop a blockchain. </h3> 
                    </div>
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
                    <SweetAlert
                        success
                        show={this.state.showSuccess}
                        title="You're all signed up!"
                        onConfirm={() => this.setState({ showSuccess: false })}
                        />
                    <SweetAlert
                        error
                        show={this.state.showFailure}
                        title="Error signing up... Try again!"
                        onConfirm={() => this.setState({ showFailure: false })}
                        />
                </div>
            </div>
        )
    }
};

MainContent.propTypes = {
    name: PropTypes.string,
};


export default MainContent;
