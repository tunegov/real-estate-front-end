import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'next/router';
import SideNavContainer from '../sharedStyledComponents/SideNavContainer';

@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SideNavContainer>That side nav though!!!...</SideNavContainer>
    );
  }
}

// use HOC to access router object inside of component
// useful for accessing props.router.pathname
export default withRouter(Header);
