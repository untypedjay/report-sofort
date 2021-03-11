import React from 'react';
import { Layout } from '../components/Layout';

interface Props {
  match: any;
}

export default function Report({ match }: Props) {
  const { reportId } = match.params;
  return (
    <Layout title="Report Details">
      Report Details { reportId }
    </Layout>
  );
}