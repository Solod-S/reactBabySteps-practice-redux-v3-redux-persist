import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import {
  increment,
  decrement,
  incrementMySlice,
  decrementMySlice,
} from 'redux/store';
import { update, storeClicsValue } from 'redux/userSliceReduxPersist';
const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  const storeClics = useSelector(storeClicsValue);
  // console.log(`storeClics`, storeClics);
  const valueSlice = useSelector(state => state.myValueSlice);
  // console.log('layout', value);

  return (
    <>
      <AppBar />
      <Outlet />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <p>value = {value}</p>
        <button onClick={() => dispatch(decrement(1))}>decrement</button>
        <button onClick={() => dispatch(increment(1))}>increment</button>
      </div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <p>value with Slice = {valueSlice}</p>
        <button onClick={() => dispatch(decrementMySlice(2))}>decrement</button>
        <button onClick={() => dispatch(incrementMySlice(2))}>increment</button>
      </div>
      <button
        type="button"
        style={{
          display: 'block',
          marginRight: 'auto',
          marginLeft: 'auto',
          fontSize: 12,
          color: '#010101',
        }}
        onClick={() => dispatch(update(2))}
      >
        Clics {storeClics}
      </button>
    </>
  );
};
export default Layout;
