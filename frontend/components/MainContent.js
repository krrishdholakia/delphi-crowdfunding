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
            showFAQ1: false, 
            showFAQ2: false, 
            showFAQ3: false, 
            showFAQ4: false
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
            this.setState({showFAQ2: false})
            this.setState({showFAQ3: false})
            this.setState({showFAQ4: false})

        } else if (e == 2) {
            this.setState({showFAQ2: !this.state.showFAQ2})
            this.setState({showFAQ1: false})
            this.setState({showFAQ3: false})
            this.setState({showFAQ4: false})
        } else if (e == 3) {
            this.setState({showFAQ3: !this.state.showFAQ3})
            this.setState({showFAQ1: false})
            this.setState({showFAQ2: false})
            this.setState({showFAQ4: false})
        } else if (e == 4) {
            this.setState({showFAQ4: !this.state.showFAQ4})
            this.setState({showFAQ1: false})
            this.setState({showFAQ2: false})
            this.setState({showFAQ3: false})
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
                    <div className="quick-faq-container">
                        <div className="quick-faq-component"> <h3 onClick={() => this.handleFAQ(1)} style={{borderBottomColor: this.state.showFAQ1 ? '#a6ed6d': 'none', borderBottomStyle: this.state.showFAQ1 ? 'solid': 'none'}} className="quick-faq"> What are smart contracts ? </h3> </div>
                        <div className="quick-faq-component"> <h3 onClick={() => this.handleFAQ(2)} style={{borderBottomColor: this.state.showFAQ2 ? '#a6ed6d': 'none', borderBottomStyle: this.state.showFAQ2 ? 'solid': 'none'}} className="quick-faq"> How are they secure ? </h3> </div>
                        <div className="quick-faq-component"> <h3 onClick={() => this.handleFAQ(3)} style={{borderBottomColor: this.state.showFAQ3 ? '#a6ed6d': 'none', borderBottomStyle: this.state.showFAQ3 ? 'solid': 'none'}} className="quick-faq"> What is Blockchain? </h3> </div>
                        <div className="quick-faq-component"> <h3 onClick={() => this.handleFAQ(4)} style={{borderBottomColor: this.state.showFAQ4 ? '#a6ed6d': 'none', borderBottomStyle: this.state.showFAQ4 ? 'solid': 'none'}} className="quick-faq"> What is Ethereum ? </h3> </div>
                        <div className="quick-faq-answer-component"><h3 style={{display: this.state.showFAQ1 ? 'block' : 'none', fontSize: '18px', fontWeight: '400'}}> A smart contract is an agreement in the form of a program (eg. if event A occurs then action B will be executed ). </h3> </div>
                        <div className="quick-faq-answer-component"><h3 style={{display: this.state.showFAQ2 ? 'block' : 'none', fontSize: '18px', fontWeight: '400'}}> A smart contract can be written on top of a blockchain, lending to it the security of the network blockchain. Making it hard for them to be tampered with, which would be equivalent to changing transaction details in the blockchain. </h3> </div>
                        <div className="quick-faq-answer-component"><h3 style={{display: this.state.showFAQ3 ? 'block' : 'none', fontSize: '18px', fontWeight: '400'}}> A blockchain is essentially a chain of recorded transactions between members on that network. Since all transactions are linked to one another (like a chain), if any party wishes to make a change to a transaction, they would then have to change every succeeding transaction which points to the previous transaction. Since transactions are being added to the blockchain continuously (ever 30s for Ethereum), this would make it increasingly difficult for a party to change a transaction detail. Thus, the transaction parties on a network no longer need to trust each other to complete a transaction, the trust is in the security of the network blockchain. </h3> </div>
                        <div className="quick-faq-answer-component"><h3 style={{display: this.state.showFAQ4 ? 'block' : 'none', fontSize: '18px', fontWeight: '400'}}> At its simplest, Ethereum is an open software platform based on blockchain technology that lets us build apps on top of it, letting us harness the power of its blockchain network (the bigger the network, the quicker the blockchain gets bigger, making every transaction on it more secure). </h3> </div>
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
