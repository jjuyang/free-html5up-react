// src/components/elements/Table.jsx

import type { JSX } from "react";

interface TableRow {
  id: string;
  name: string;
  description: string;
  price: string;
}

const tableData: TableRow[] = [
  { id: '1', name: 'Item1-1', description: 'Ante turpis integer aliquet porttitor.', price: '29.99' },
  { id: '2', name: 'Item1-2', description: 'Vis ac commodo adipiscing arcu aliquet.', price: '19.99' },
  { id: '3', name: 'Item1-3', description: 'Morbi faucibus arcu accumsan lorem.', price: '29.99' },
  { id: '4', name: 'Item1-4', description: 'Vitae integer tempus condimentum.', price: '19.99' },
  { id: '5', name: 'Item1-5', description: 'Ante turpis integer aliquet porttitor.', price: '29.99' },
];

const tableData2: TableRow[] = [
  { id: '1', name: 'Item2-1', description: 'Ante turpis integer aliquet porttitor.', price: '29.99' },
  { id: '2', name: 'Item2-2', description: 'Vis ac commodo adipiscing arcu aliquet.', price: '19.99' },
  { id: '3', name: 'Item2-3', description: 'Morbi faucibus arcu accumsan lorem.', price: '29.99' },
  { id: '4', name: 'Item2-4', description: 'Vitae integer tempus condimentum.', price: '19.99' },
  { id: '5', name: 'Item2-5', description: 'Ante turpis integer aliquet porttitor.', price: '29.99' },
];

function Table(): JSX.Element {
  return (
    <>
      <h3>Table</h3>

      <h4>Default</h4>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>
              <td>100.00</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <h4>Alternate</h4>
      <div className="table-wrapper">
        <table className="alt">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {tableData2.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2}></td>
              <td>100.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default Table;