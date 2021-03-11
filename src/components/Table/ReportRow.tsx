import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: any;
}

export default function ReportRow({ children }: Props) {
  const computeStatusClass = () => {
    const baseClass = 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
    switch (children.status.name) {
      case 'Neu':
        return `${baseClass} bg-blue-100 text-blue-800`;

      case 'Angenommen':
        return `${baseClass} bg-yellow-100 text-yellow-800`;

      case 'Zurückgestellt':
        return `${baseClass} bg-red-100 text-red-800`;

      default:
        return `${baseClass} bg-green-100 text-green-800`;
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">
              { children.title.length > 70 ? `${children.title.substring(0, 67)}...` : children.title }
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
        <span className={computeStatusClass()}>
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