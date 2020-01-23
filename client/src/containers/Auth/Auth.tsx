import React, { Component } from 'react';

class Auth extends Component {
  constructor(props: object) {
    super(props);

    this.state = {
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/'
    };
  }

  render() {
    return (
      <div>Auth Page</div>
    )
  }
}

export default Auth;
