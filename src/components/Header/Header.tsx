import React from 'react';

interface Props {
  children: string;
}

export default function Header({ children }: Props) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900">
          { children }
        </h3>
      </div>
    </header>
  );
}