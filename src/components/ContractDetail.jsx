import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const ContractDetail = (props) => {
  const {
    company,
    contractId,
    periodEnd,
    periodStart,
    scheduledForRenewal,
    negotiationRenewalDate,
  } = props.location.state.contract;
  return (
    <div className='details'>
      <h2>Contract Details</h2>
      <div className='contract-container'>
        <div>
          <div>{company}</div>
          <div>Contract id: {contractId}</div>
          <div>Period end: {periodEnd}</div>
          <div>Period start: {periodStart}</div>
          <div>Scheduled for renewal: {scheduledForRenewal}</div>
          <div>Negotiation Renewal Date: {negotiationRenewalDate}</div>
        </div>
      </div>
      <div>
        <Link to='/'>
          <button className='btn'>Back to Contracts</button>
        </Link>
      </div>
    </div>
  );
};

export default ContractDetail;
