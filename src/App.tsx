import React, { useEffect, useState } from 'react';
import { getReports } from './api/reports';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';

export default function App() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);



  useEffect(() => {

  }, []);

  const loadReports = async () => {
    const response = await getReports();
    console.log(response)
    setReports(response);
    setIsLoading(false)
  };

  return (
    <div>
      <Navbar/>
      <Header>Neuste Meldungen</Header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {isLoading ? <p>Loading...</p> : <p>Data is here</p>}
        </div>
      </main>
    </div>
  );
}