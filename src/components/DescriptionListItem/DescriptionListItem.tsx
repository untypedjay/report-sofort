import React from 'react';

interface Props {
  backgroundColorClass?: string;
  label: string;
  children: string;
}

export default function DescriptionListItem({ backgroundColorClass = 'bg-gray-50', label, children }: Props) {
  return (
    <div className={`${backgroundColorClass} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
      <dt className="text-sm font-medium text-gray-500">
        { label }
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        { children }
      </dd>
    </div>
  );
}