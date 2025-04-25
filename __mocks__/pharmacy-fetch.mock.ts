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
