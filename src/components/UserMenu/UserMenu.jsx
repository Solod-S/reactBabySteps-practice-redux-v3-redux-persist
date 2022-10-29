import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/userSlice';
const UserMenu = () => {
  const user = useSelector(state => state.userSlice.name);
  const dispatch = useDispatch();
  return (
    <div>
      {user}
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};
export default UserMenu;
