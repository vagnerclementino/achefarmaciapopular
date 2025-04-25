import { useState, useEffect } from 'react';

import { Pharmacy } from '../types/pharmacy';

export default function Home() {
    const [data, setData] = useState<Pharmacy[]>([]);

    useEffect(() => {
        fetch('/api/filter')
            .then(response => response.json())
            .then(data => {
                setData(data)
    });
    }, []);

    return (
      <div>
        <h1>Lista de Farmácias Credenciadas</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Endere&ccedil;o</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((pharmacy, index) => (
              <tr key={index}>
                <td>{pharmacy.name}</td>
                <td>{pharmacy.address}</td>
                <td>{pharmacy.neighborhood}</td>
                <td>{pharmacy.city}</td>
                <td>{pharmacy.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
