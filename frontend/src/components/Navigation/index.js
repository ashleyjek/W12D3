import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
    <h1 className="logo">Bench BnB</h1>
    <div className="nav-bar">
      <ul className="nav-links">
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          {sessionLinks}
        </li>
      </ul>
    </div>
    </>
  );
}

export default Navigation;
