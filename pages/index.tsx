import { useState, useEffect } from 'react';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/filter')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>Pharmacies</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pharmacy, index) => (
                        <tr key={index}>
                            <td>{pharmacy.name}</td>
                            <td>{pharmacy.address}</td>
                            <td>{pharmacy.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
