// teste@trybe.com
// numero

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../redux/actions';
import { RootStateProps } from '../types';
import {
  ButtonLogin,
  MainStyle,
  Input,
  Label,
  ElementsStyle,
  Container,
  Nav,
  // InputWrapper, não utilizado.
} from '../styles';

function Login() {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const dispatch = useDispatch();
  const email = useSelector((state: RootStateProps) => state.email);
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
      navigate('/carteira');
    }
  };

  return (
    <div>
      <MainStyle>
        <Nav>
          <img src="imgs/icons8-linkedin.svg" alt="icone linkedin" />
          <a href="https://www.linkedin.com/in/eubrunodeoliveira/" target="_blank" rel="noreferrer">linkedin</a>
          <img src="imgs/icons8-github.svg" alt="icone gitHub" />
          <a href="https://github.com/OliveiraBruno24" target="_blank" rel="noreferrer">GitHub</a>
        </Nav>
        <Container>
          <img src="src/components/logoTrybeWallet.png" alt="logo trybeWallet" />
          <ElementsStyle>
            <Label htmlFor="email-input">E-mail:</Label>
            <Input
              type="email"
              id="email-input"
              data-testid="email-input"
              value={ email }
              placeholder="exemplo@email.com"
              onChange={ handleEmailChange }
            />
          </ElementsStyle>
          <ElementsStyle>
            <Label htmlFor="password-input">Senha:</Label>
            <Input
              type="password"
              id="password-input"
              data-testid="password-input"
              value={ password }
              placeholder="minimo de 6 caractéries"
              onChange={ handlePasswordChange }
            />
          </ElementsStyle>
          <button
            onClick={ handleLogin }
            disabled={ !isValidEmail || !isValidPassword }
          >
            Entrar
          </button>
        </Container>
        <footer>Projeto desenvolvido por Bruno de Oliveira</footer>
      </MainStyle>
    </div>
  );
}

export default Login;
