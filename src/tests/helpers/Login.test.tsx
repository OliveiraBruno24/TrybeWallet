import { screen } from '@testing-library/react';
import Login from '../../pages/Login';
import { renderWithRouter } from './renderWith';

describe('verifica as renderiza os campos de login corretamente', () => {
  test('o input "e-mail" é renderizado na tela', () => {
    renderWithRouter(<Login />, { route: '/' });
    const emailInput = screen.getByRole('textbox', { name: /e-mail:/i });
    expect(emailInput).toBeInTheDocument();
  });
});
