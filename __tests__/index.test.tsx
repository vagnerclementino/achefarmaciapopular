import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '../__mocks__/pharmacy-fetch.mock';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /Lista de Farmácias Credenciadas/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it('renders a table', () => {
    render(<Home />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
   it("renders a heading and pharmacy data", async () => {
     render(<Home />);
     const heading = screen.getByRole("heading", {
       name: /Lista de Farmácias Credenciadas/i
     });
     expect(heading).not.toBeNull();

     const pharmacyName = await screen.findByText(
       "FARMACIA QUEIROZ CANEDO LTDA"
     );
     expect(pharmacyName).toBeInTheDocument();

     expect(screen.getByText("BELO HORIZONTE")).toBeInTheDocument();
     expect(screen.getByText("CENTRO")).toBeInTheDocument();
     expect(screen.getByText("AVENIDA DONA BALDOINA, 36")).toBeInTheDocument();
   });
});