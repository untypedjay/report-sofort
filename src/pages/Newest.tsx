import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { getNewestReports } from '../api/reports';
import { Table } from '../components/Table';

export default function Newest() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tableHeader = [
    {
      title: 'Meldung',
      isButton: false
    },
    {
      title: 'Ort',
      isButton: false
    },
    {
      title: 'Status',
      isButton: false
    },
    {
      title: 'Kommentare',
      isButton: false
    },
    {
      title: 'Details',
      isButton: true
    },
  ];

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
          <Table header={tableHeader}>{ reports }</Table>
      }
    </Layout>
  );
}