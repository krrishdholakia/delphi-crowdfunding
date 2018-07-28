import React from 'react';
import PropTypes from 'prop-types';
import TopNav from './TopNav'


const FAQ = () => {
    console.log("reaches FAQ");
    return (
        <div className="faq-content">
            <h3 className="faq-title"> Frequently Asked Questions </h3>
            <h3 className="faq-question" > Why we're doing this? </h3> 
            <p className="faq-answer"> We believe that there is an accountability issue for people on crowdfunding websites. 
                Currently, when a contribution is made to a successful crowdfunding campaign, there is no enforced accountability beyond that of the promises made 
                by the campaign creator to his/her patrons. If the campaign creator misuses the funds / does not deliver on their promises there is no enforced repercussion. 
                Patrons may choose to use legal action however, this is costly both monetarily and time-wise. </p>
            <h3 className="faq-question"> What is Delphi ? </h3> 
            <p className="faq-answer"> Delphi uses the enforceability of a smart contract for crowdfunding campaigns. 
                A solution which would allow patrons and campaign creators to trust each other without knowing each other. </p>
            <h3 className="faq-question"> What is Ethereum? Why should I trust it? </h3>
            <p className="faq-answer"> The great interest in decentralised networks like Bitcoin and Ethereum have led to an increase in computing power available for them, 
                making them inherently more secure. Ethereum offers the ability to build apps on top of it, allowing developers to harness the power of a blockchain. 
                A blockchain is essentially a chain of recorded transactions between members on that network. Since all transactions are linked to one another, 
                if any party wishes to make a change to a transaction, they would then have to change every succeeding transaction which points to the previous transaction. 
                Since transactions are being added to the blockchain continuously (ever 30s for Ethereum, every 10 minutes for Bitcoin), 
                this would make it increasingly difficult for a party to change a transaction detail. 
                Thus, the transaction parties on a network no longer need to trust each other to complete a transaction, the trust is in the security of the network blockchain. </p>
            <h3 className="faq-question"> What are smart contracts ? </h3>
            <p className="faq-answer"> These are essentially agreements reached by members in the network which executes upon certain agreed upon conditions becoming true (A & B have a smart contract where if A transfers ownership of a car to B, B pays A a certain amount. When A completes this transfer, the money is instantly transferred from B to A, preventing B from backing out). 
                Again this removes the trust component between transacting parties and places it in the smart contract. </p>
            <h3 className="faq-question"> How are smart contracts secure ? </h3>
            <p className="faq-answer"> A smart contract can be written on top of a blockchain, lending to it the security of the network blockchain. 
                Making it hard for a malicious party to change the terms of the agreement, which would be equivalent to changing transaction details in the blockchain. </p>
        </div>
    );
};

FAQ.propTypes = {
    name: PropTypes.string,
};


export default FAQ;
