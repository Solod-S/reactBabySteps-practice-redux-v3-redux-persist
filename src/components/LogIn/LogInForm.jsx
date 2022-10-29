import { useDispatch } from 'react-redux';
import { logIn } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';
const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const logInValue = form.elements.logIn.value;
    if (!logInValue) {
      return;
    }

    dispatch(logIn(logInValue));
    form.reset();
    navigate(`/dashboard`, { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="logIn" />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};
export default LogInForm;
