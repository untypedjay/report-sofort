import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { getNearestReports } from '../api/reports';
import { Loader } from '../components/Loader';
import { Table } from '../components/Table';
import config from '../util/config.json';

export default function Nearby() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const response = await getNearestReports();
    console.log(response)
    setReports(response);
    setIsLoading(false)
  };

  return (
    <Layout title="In der Nähe">
      {
        isLoading ?
          <Loader/> :
          <Table header={config.reportTableHeader}>{ reports }</Table>
      }
    </Layout>
  );
}