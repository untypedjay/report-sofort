import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { getReports } from '../api/reports';
import { Table } from '../components/Table';

export default function Municipalities() {
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
    const response = await getReports();
    console.log(response)
    setReports(response);
    setIsLoading(false)
  };

  return (
    <Layout title="Gemeinden">
      {
        isLoading ?
          <p>Loading</p> :
          <Table header={tableHeader}>{ reports }</Table>
      }
    </Layout>
  );
}