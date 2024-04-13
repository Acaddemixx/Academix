import React from 'react';

function EventTable() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Event Name</th>
            <th className="border border-gray-300 px-4 py-2">Organizer</th>
            <th className="border border-gray-300 px-4 py-2">Event Code</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">GDCS Club</td>
            <td className="border border-gray-300 px-4 py-2">Ahmed</td>
            <td className="border border-gray-300 px-4 py-2">ETS000/12</td>
            <td className="border border-gray-300 px-4 py-2 text-green-500">Approved</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">GDCS Club</td>
            <td className="border border-gray-300 px-4 py-2">Ahmed</td>
            <td className="border border-gray-300 px-4 py-2">ETS000/12</td>
            <td className="border border-gray-300 px-4 py-2 text-gray-500">panding..</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">GDCS Club</td>
            <td className="border border-gray-300 px-4 py-2">Ahmed</td>
            <td className="border border-gray-300 px-4 py-2">ETS000/12</td>
            <td className="border border-gray-300 px-4 py-2 text-red-900">Rejected</td>
          </tr>
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
