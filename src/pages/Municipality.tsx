import React, { useCallback, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { Table } from '../components/Table';
import { Loader } from '../components/Loader';
import { getMunicipalityName } from '../api/municipalities';
import { getReportsByMunicipality } from '../api/reports';
import config from '../util/config.json';

interface Props {
  match: any;
}

export default function Municipality({ match }: Props) {
  const { locationId } = match.params;
  const [reports, setReports] = useState([]);
  const [municipality, setMunicipality] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loadReports = useCallback(
    async () => {
      const municipalityName = await getMunicipalityName(locationId);
      setMunicipality(municipalityName);
      const response = await getReportsByMunicipality(locationId);
      setReports(response);
      setIsLoading(false)
    }, [locationId]
  );

  useEffect(() => {
    loadReports();
  }, [loadReports]);

  return (
    <Layout title={municipality && `Meldungen aus ${municipality}`}>
      {
        isLoading ?
        <Loader/> :
        <Table header={config.reportTableHeader}>{ reports }</Table>
      }
    </Layout>
  );
}