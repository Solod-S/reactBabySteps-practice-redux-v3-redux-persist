import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import {
  increment,
  decrement,
  incrementMySlice,
  decrementMySlice,
} from 'redux/store';

const Layout = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  const valueSlice = useSelector(state => state.myValueSlice);
  console.log('layout', value);

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
    </>
  );
};
export default Layout;
