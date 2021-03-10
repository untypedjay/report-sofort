import React, { useEffect, useState } from 'react';
import { getReports } from './api/reports';

export default function App() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const response = await getReports();
    console.log(response)
    setReports(response);
    setIsLoading(false)
  };

  return (
    <div>
      { isLoading ? <p>Loading...</p> : <p>Data is here</p> }
    </div>
  );
}