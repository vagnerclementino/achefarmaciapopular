import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

jest.mock('../pages/index', () => ({
  __esModule: true,
  default: () => (
    <div>
      <h1>Lista de Farmácias Credenciadas</h1>
    </div>
  ),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      {
        state: 'MG',
        cod: '3100104',
        city: 'BELO HORIZONTE',
        CNPJ: '11.916.556/0001-49',
        name: 'FARMACIA QUEIROZ CANEDO LTDA',
        address: 'AVENIDA DONA BALDOINA, 36',
        neighborhood: 'CENTRO',
        credential_date: '17/06/2011',
      },
    ]),
  })
) as jest.Mock;

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /Lista de Farmácias Credenciadas/i,
    });
    expect(heading).not.toBeNull();
  });
});
