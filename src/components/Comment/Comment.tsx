import React from 'react';
import { FaComment } from 'react-icons/fa';

interface Props {
  timestamp: string,
  children: string
}

export default function Comment({ timestamp, children }: Props) {
  return (
    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
      <div className="w-0 flex-1 flex items-center">
        <FaComment/>
        <span className="ml-2 flex-1 w-0">{ children }</span>
        <span>{ timestamp }</span>
      </div>
    </li>
  );
}