import React from 'react';
import { FaComment } from 'react-icons/fa';
import { formatDateTime } from '../../util/converter';

interface Props {
  timestamp: string,
  children: string
}

export default function Comment({ timestamp, children }: Props) {
  return (
    <li className="pl-3 pr-4 py-3 flex flex-col justify-between text-sm">
      <p className="text-gray-500 ml-2 mb-2">{ formatDateTime(timestamp) }:</p>
      <p className="ml-2">{ children }</p>
    </li>
  );
}