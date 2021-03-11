import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { getReports } from '../api/reports';
import { Loader } from '../components/Loader';

export default function Nearby() {
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
    <Layout title="In der Nähe">
      { isLoading ? <Loader/> : <p>Nearby</p> }
    </Layout>
  );
}