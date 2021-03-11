import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';
import { getMunicipalities } from '../api/municipalities';
import { Loader } from '../components/Loader';

export default function Municipalities() {
  const [municipalities, setMunicipalities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const tableHeader = [
    {
      title: 'Gemeinde',
      isButton: false
    },
    {
      title: 'Bezirk / Bundesland',
      isButton: false
    },
    {
      title: 'Staat',
      isButton: false
    },
    {
      title: 'Zu den Meldungen',
      isButton: true
    },
  ];

  useEffect(() => {
    loadMunicipalities();
  }, []);

  const loadMunicipalities = async () => {
    const response = await getMunicipalities();
    setMunicipalities(response);
    setIsLoading(false)
  };

  return (
    <Layout title="Gemeinden">
      {
        isLoading ?
          <Loader/> :
          <Table header={tableHeader}>{ municipalities }</Table>
      }
    </Layout>
  );
}