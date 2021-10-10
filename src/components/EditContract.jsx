import React from 'react';

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const {
      id,
      company,
      contractId,
      periodEnd,
      periodStart,
      scheduledForRenewal,
      negotiationRenewalDate,
    } = props.location.state.contract;
    this.state = {
      id,
      company,
      contractId,
      periodEnd,
      periodStart,
      scheduledForRenewal,
      negotiationRenewalDate,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.company === '' || this.state.contractId === '') {
      alert('ALl the fields are mandatory!');
      return;
    }
    this.props.updateContractHandler(this.state);
    this.setState({ company: '', contractId: '' });
    this.props.history.push('/');
  };
  render() {
    return (
      <div className='add-contract'>
        <h2>Edit Contract</h2>
        <form className='ui form' onSubmit={this.update}>
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
          <button className='btn'>Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
