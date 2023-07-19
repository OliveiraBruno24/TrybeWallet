// teste@trybe.com
// numero

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../redux/actions';
import { RootState } from '../types';

function Login() {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const email = useSelector((state:RootState) => state.email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);

    setIsValidEmail(emailRegex.test(value));
    dispatch(setEmail(value));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    if (value.length >= 6) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };

  const handleLogin = () => {
    if (password.length >= 6 && isValidEmail === true) {
      // dispatch(setEmail(email));
      navigate('/carteira');
    }
  };

  return (
    <div>
      <label htmlFor="email-input">E-mail:</label>
      <input
        type="email"
        id="email-input"
        data-testid="email-input"
        value={ email }
        placeholder="exemplo@email.com"
        onChange={ handleEmailChange }
      />
      <br />
      <label htmlFor="password-input">Senha:</label>
      <input
        type="password"
        id="password-input"
        data-testid="password-input"
        value={ password }
        placeholder="minimo de 6 caractéries"
        onChange={ handlePasswordChange }
      />
      <button
        onClick={ handleLogin }
        disabled={ !isValidEmail || !isValidPassword }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
