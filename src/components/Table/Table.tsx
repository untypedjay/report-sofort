import React from 'react';
import { TableHeaderItem, TableRow } from './index';

interface Props {
  header: any[];
  children: any[];
}

export default function Table({ header, children }: Props) {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {
                    header.map(headerItem => (
                      <TableHeaderItem
                        key={headerItem.title}
                        isButton={headerItem.isButton}
                      >
                        { headerItem.title }
                      </TableHeaderItem>
                    ))
                  }
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {
                children.map(row => (
                  <TableRow key={row.id}>{ row }</TableRow>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}