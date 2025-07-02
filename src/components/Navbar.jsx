import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    const auth = useAuth();

    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'cornflowerblue' : 'coral',
      fontSize: isActive ? '20px ' : '16px',
    };
  };

  return (
    <nav className='primary-nav'>
      <NavLink to='/' style={navLinkStyles}>
        Home
      </NavLink>

      <NavLink to='/about' style={navLinkStyles}>
        About
      </NavLink>

      <NavLink to='/products' style={navLinkStyles}>
        Products
      </NavLink>

      <NavLink to='users' style={navLinkStyles}>
        Users
      </NavLink>

      <NavLink to='profile' style={navLinkStyles}>
        Profile
      </NavLink>

      {!auth.user && <NavLink to='login'>Login</NavLink>}
    </nav>
  );
};

export default Navbar;
