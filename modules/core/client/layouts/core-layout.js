import React, { Component } from 'react';

import Nav from '../components/nav';

export default class CoreLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Core Layout...");
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-xs-12'>
          <h1 className='text-center'>Core Layout</h1>
            <Nav />
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}