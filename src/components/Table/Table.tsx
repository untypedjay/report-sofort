import React from 'react';
import { TableHeaderItem, TableRow } from './index';

export default function Table() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <TableHeaderItem>Meldung</TableHeaderItem>
                  <TableHeaderItem>Ort</TableHeaderItem>
                  <TableHeaderItem>Status</TableHeaderItem>
                  <TableHeaderItem>Kommentare</TableHeaderItem>
                  <TableHeaderItem isButton={true}>Details</TableHeaderItem>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <TableRow/>
                <TableRow/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}