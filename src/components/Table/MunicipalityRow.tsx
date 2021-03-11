import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: any;
}

export default function MunicipalityRow({ children }: Props) {
  const computeCountryClass = () => {
    const baseClass = 'px-2 inline-flex text-xs leading-5 font-semibold rounded-full'
    switch (children.country) {
      case 'Österreich':
        return `${baseClass} bg-red-100 text-red-800`;

      case 'Deutschland':
        return `${baseClass} bg-yellow-100 text-yellow-800`;

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
              { children.name }
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          { children.district }
        </div>
        <div className="text-sm text-gray-500">
          { children.state }
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={computeCountryClass()}>
          { children.country }
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link
          to={`/locations/${children.id}`}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Zu den Meldungen
        </Link>
      </td>
    </tr>
  );
}