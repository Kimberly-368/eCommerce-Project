import React, { Component } from 'react';

import PageTitle from '../pageTitle';

class AccountInformation extends Component {
  render() {
    return (
      <div className='account-information'>
        <PageTitle className='account-information' title='Account Information'/>
        account info
      </div>
    )
  }
}

export default AccountInformation;