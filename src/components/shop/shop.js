import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as action from '../../actions';

class Shop extends Component {

  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: 'Login',
        path: '/signin'
      }
    ]
    this.props.setHeaderLinks(headerLinks);
    // fetch shop products action creator
    // set the header links
    // fetch navbar links
      // set the navbar links
      // filter products with links
  }

  render() {
    return (
      <div className="shop">
        {/* shop search bar */}
        {/* shop product */}
        {/* shop cart button */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

Shop = connect(mapStateToProps, action)(Shop);

export default Shop;