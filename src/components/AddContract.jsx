import React from 'react';
import PropTypes from 'prop-types';

class AddContract extends React.Component {
  state = {
    company: '',
    contractId: '',
    periodEnd: '',
    periodStart: '',
    scheduledForRenewal: '',
    negotiationRenewalDate: '',
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.company === '' || this.state.contractId === '') {
      alert('Company name and contract ID are mandatory!');
      return;
    }
    this.props.addContractHandler(this.state);
    this.setState({
      company: '',
      contractId: '',
      periodEnd: '',
      periodStart: '',
      scheduledForRenewal: '',
      negotiationRenewalDate: '',
    });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className='add-contract'>
        <h2>Add Contract</h2>
        <form className='ui form' onSubmit={this.add}>
          <div className='field'>
            <label>Company</label>
            <input
              type='text'
              name='company'
              placeholder='Company'
              value={this.state.company}
              onChange={(e) => this.setState({ company: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Contract Id</label>
            <input
              type='text'
              name='contractId'
              placeholder='ContractId'
              value={this.state.contractId}
              onChange={(e) => this.setState({ contractId: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Period End</label>
            <input
              type='text'
              name='perdiodEnd'
              placeholder='Period End'
              value={this.state.periodEnd}
              onChange={(e) => this.setState({ periodEnd: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Period Start</label>
            <input
              type='text'
              name='perdiodStart'
              placeholder='Period Start'
              value={this.state.periodStart}
              onChange={(e) => this.setState({ periodStart: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Period End</label>
            <input
              type='text'
              name='scheduledForRenewal'
              placeholder='scheduled For Renewal'
              value={this.state.scheduledForRenewal}
              onChange={(e) =>
                this.setState({ scheduledForRenewal: e.target.value })
              }
            />
          </div>
          <div className='field'>
            <label>Period End</label>
            <input
              type='text'
              name='negotiationRenewalDate'
              placeholder='negotiation Renewal Date'
              value={this.state.negotiationRenewalDate}
              onChange={(e) =>
                this.setState({ negotiationRenewalDate: e.target.value })
              }
            />
          </div>
          <button className='btn'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddContract;

AddContract.propTypes = {
  company: PropTypes.string,
  contractId: PropTypes.number,
  periodEnd: PropTypes.instanceOf(Date),
  periodStart: PropTypes.instanceOf(Date),
  scheduledForRenewal: PropTypes.bool,
  negotiationRenewalDate: PropTypes.instanceOf(Date),
};
