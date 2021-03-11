import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: any;
}

export default function TableRow({ children }: Props) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">
              { children.title }
            </div>
            <div className="text-sm text-gray-500">
              { children.createdAt }
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          { children.municipality.name }
        </div>
        <div className="text-sm text-gray-500">
          { children.municipality.country }
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          { children.status.name }
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        { children.commentCount }
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link
          to={`/reports/${children.id}`}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Details
        </Link>
      </td>
    </tr>
  );
}