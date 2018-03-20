import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  let active;
  console.log(`pathname: ${router.pathname}`)
  console.log(`href: ${props.href}`)


  if (router.pathname === props.href) {
    active = true;
  } else {
    active = false;
  }

  return <Link {...props}>{React.cloneElement(child, { active })}</Link>;
};

export default withRouter(ActiveLink);
