import React from 'react';
import { Link } from 'react-router-dom';

export default function TableRow() {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">
              Title of the report
            </div>
            <div className="text-sm text-gray-500">
              Date of the report
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">St. Johann</div>
        <div className="text-sm text-gray-500">Österreich</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link to="/" className="text-indigo-600 hover:text-indigo-900">Details</Link>
      </td>
    </tr>
  );
}