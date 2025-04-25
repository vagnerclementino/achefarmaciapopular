import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '../__mocks__/pharmacy-fetch.mock';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /Lista de Farmácias Credenciadas/i,
    });
    expect(heading).not.toBeNull();
  });
  });

  it('renders pharmacy data from fetch', async () => {
    render(<Home />);
    const pharmacyName = await screen.findByText(/FARMACIA QUEIROZ CANEDO LTDA/i);
    const pharmacyAddress = await screen.findByText(/AVENIDA DONA BALDOINA, 36/i);
    const pharmacyNeighborhood = await screen.findByText(/CENTRO/i);
    const pharmacyCity = await screen.findByText(/BELO HORIZONTE/i);
    const pharmacyState = await screen.findByText(/MG/i);

    expect(pharmacyName).not.toBeNull();
    expect(pharmacyAddress).not.toBeNull();
    expect(pharmacyNeighborhood).not.toBeNull();
    expect(pharmacyCity).not.toBeNull();
    expect(pharmacyState).not.toBeNull();
  });
