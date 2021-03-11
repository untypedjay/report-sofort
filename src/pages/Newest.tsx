import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { getReports } from '../api/reports';

export default function Newest() {
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
    <Layout title="Neuste Meldungen">
      { isLoading ? <p>Loading</p> : <p>Newest</p> }
    </Layout>
  );
}