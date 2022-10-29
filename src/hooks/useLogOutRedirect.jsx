import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const useLogOutRedirect = () => {
  const isLogIn = useSelector(state => state.userSlice.logIn);
  console.log(isLogIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogIn) {
      navigate(`/login`, { replace: true });
    }
  }, [isLogIn, navigate]);
};
