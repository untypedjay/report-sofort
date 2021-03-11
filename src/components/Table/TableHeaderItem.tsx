import React from 'react';

interface Props {
  isButton?: boolean;
  children: string;
}

export default function TableHeaderItem({ isButton = false, children }: Props) {
  if (isButton) {
    return (
      <th scope="col" className="relative px-6 py-3">
        <span className="sr-only">{ children }</span>
      </th>
    );
  }

  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      { children }
    </th>
  );
}