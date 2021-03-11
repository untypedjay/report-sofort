import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { getNewestReports } from '../api/reports';
import { Table } from '../components/Table';
import config from '../util/config.json';

export default function Newest() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const response = await getNewestReports();
    setReports(response);
    setIsLoading(false)
  };

  return (
    <Layout title="Neuste Meldungen">
      {
        isLoading ?
          <p>Loading</p> :
          <Table header={config.reportTableHeader}>{ reports }</Table>
      }
    </Layout>
  );
}