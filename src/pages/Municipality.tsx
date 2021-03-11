import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { getReportsByMunicipality } from '../api/reports';
import { Table } from '../components/Table';
import config from '../util/config.json';
import { getMunicipalityName } from '../api/municipalities';

interface Props {
  match: any;
}

export default function Municipality({ match }: Props) {
  const { locationId } = match.params;
  const [reports, setReports] = useState([]);
  const [municipality, setMunicipality] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const municipalityName = await getMunicipalityName(locationId);
    setMunicipality(municipalityName);
    const response = await getReportsByMunicipality(locationId);
    setReports(response);
    setIsLoading(false)
  };

  return (
    <Layout title={municipality && `Meldungen aus ${municipality}`}>
      {
        isLoading ?
        <p>Loading</p> :
        <Table header={config.reportTableHeader}>{ reports }</Table>
      }
    </Layout>
  );
}