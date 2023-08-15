import React from 'react';
import Table from 'react-bootstrap/Table';
import './Table.css';

function StripedColumnsExample() {
  const nutrientsData = [
    { id: 1, nutrient: 'Vitamin A', value: '5000 IU' },
    { id: 2, nutrient: 'Vitamin C', value: '100 mg' },
    { id: 3, nutrient: 'Calcium', value: '1000 mg' },
    { id: 4, nutrient: 'Iron', value: '18 mg' },
    { id: 5, nutrient: 'Fiber', value: '25 g' },
    { id: 6, nutrient: 'Protein', value: '50 g' },
    { id: 7, nutrient: 'Sodium', value: '2000 mg' },
    { id: 8, nutrient: 'Potassium', value: '3500 mg' },
    { id: 9, nutrient: 'Magnesium', value: '400 mg' },
    { id: 10, nutrient: 'Zinc', value: '15 mg' },
  ];

  return (
    <Table className="table" striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>Nutrients</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        {nutrientsData.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.nutrient}</td>
            <td>{data.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StripedColumnsExample;
