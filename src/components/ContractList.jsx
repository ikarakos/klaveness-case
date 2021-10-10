import React from 'react';
import Contract from './Contract';
import './App.css';
import { Link } from 'react-router-dom';

const ContractList = (props) => {
  const deleteContractHandler = (id) => {
    props.getContractId(id);
  };

  const renderContractList = props.contracts.map((contract) => {
    return (
      <Contract
        contract={contract}
        key={contract.id}
        clickHandler={deleteContractHandler}
      />
    );
  });

  return (
    <div>
      <div className='list-button-container'>
        <h2>Contract List</h2>
        <Link to='/add'>
          <button className='btn'>Add New Contract</button>
        </Link>
      </div>
      <div> {renderContractList}</div>
    </div>
  );
};

export default ContractList;
