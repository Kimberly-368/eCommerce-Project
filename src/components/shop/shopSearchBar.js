import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
  return (
    <input className={`${props.className} shop-search-bar`} {...props.input} type='text' placeholder={placeholder} {...input} />
  )
}

class ShopSearchBar extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
        <Field name='shop-search-bar' className='shop-search-bar__form-search-bar' placeholder='search' component={FormSearchBar} />
      </form>
    )
  } 
}

ShopSearchBar = reduxForm({
  form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;