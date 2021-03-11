import React from 'react';
import { ReportRow, TableHeaderItem } from './index';
import MunicipalityRow from './MunicipalityRow';

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
                header[0].title === 'Gemeinde' ?
                children.map(row => (
                  <MunicipalityRow key={row.id}>{ row }</MunicipalityRow>
                )) :
                children.map(row => (
                  <ReportRow key={row.id}>{ row }</ReportRow>
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