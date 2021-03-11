import React, { useEffect, useState } from 'react';
import { getReports } from './api/reports';
import { Navbar } from './components/Navbar';

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
    </div>
  );
}