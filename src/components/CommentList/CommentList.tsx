import React from 'react';
import { Comment } from './../Comment';

type CommentType = {
  text: string,
  createdAt: string
};

interface Props {
  children: CommentType[]
}

export default function CommentList({ children }: Props) {
  return (
    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">
        Kommentare
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
          { children.map((comment: CommentType) => (
            <Comment
              key={comment.createdAt}
              timestamp={comment.createdAt}
            >
              { comment.text }
            </Comment>
          ))
          }
        </ul>
      </dd>
    </div>
  );
}