import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
const AppBar = () => {
  const isLogIn = useSelector(state => state.userSlice.logIn);
  return (
    <header
      style={{
        padding: 12,
        borderBottom: '1px solid black',
        margin: 5,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <nav>
        <Link to="login">Log in</Link>
      </nav>
      {isLogIn && <UserMenu />}
      <Link to="/">Back</Link>
      {/* <Link to="dashboard">Dashboard</Link> */}
    </header>
  );
};

export default AppBar;
