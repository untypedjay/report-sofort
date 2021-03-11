import React, { ReactNode } from 'react';
import { Navbar } from '../Navbar';
import { Header } from '../Header';

interface Props {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <div>
      <Navbar/>
      <Header>{ title }</Header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          { children }
        </div>
      </main>
    </div>
  );
}