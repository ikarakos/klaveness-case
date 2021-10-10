import React from 'react';
import { Link } from 'react-router-dom';

const Contract = (props) => {
  const {
    id,
    company,
    contractId,
    periodEnd,
    periodStart,
    scheduledForRenewal,
    negotiationRenewalDate,
  } = props.contract;

  return (
    <div className='contract-container'>
      <div>
        <Link
          to={{
            pathname: `/contact/${id}`,
            state: { contract: props.contract },
          }}
          style={{ color: 'black' }}
        >
          <strong> {company}</strong>
          <div>contract id: {contractId}</div>
          <div>Period end: {periodEnd}</div>
          <div>Period start: {periodStart}</div>
          <div>Scheduled for renewal: {scheduledForRenewal}</div>
          <div>Negotiation Renewal Date: {negotiationRenewalDate}</div>
        </Link>
      </div>

      <div className='buttons-arrangement'>
        <Link
          to={{
            pathname: `/edit/`,
            state: { contract: props.contract },
          }}
        >
          <i
            className='edit alternate outline icon'
            style={{ color: 'black', marginTop: '7px' }}
          >
            Edit
          </i>
        </Link>
        <i
          className='trash alternate outline icon'
          style={{ color: 'red', marginTop: '7px' }}
          onClick={() => props.clickHandler(id)}
        >
          Delete
        </i>
      </div>
    </div>
  );
};

export default Contract;
