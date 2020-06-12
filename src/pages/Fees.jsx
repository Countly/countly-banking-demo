import React from 'react';


const data = [
  {
    type: 'TL',
    rate: '%10.5',
  },
  {
    type: 'USD',
    rate: '%1.1',
  },
  {
    type: 'EUR',
    rate: '%0.3',
  },
];

const Fees = () => (
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 border border-gray-300 w-1/2 mx-auto">
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Currency type</th>
          <th className="px-4 py-2">Interest rate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem) => (
          <tr>
            <td className="border px-4 py-2">{elem.type}</td>
            <td className="border px-4 py-2">{elem.rate}</td>
          </tr>
        ))}


      </tbody>
    </table>
  </div>
);

export default Fees;
