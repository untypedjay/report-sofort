import React, { useCallback, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import NotFound from './NotFound';
import { CommentList } from '../components/CommentList';
import { DescriptionListItem } from '../components/DescriptionListItem';
import { Loader } from '../components/Loader';
import { getReport } from '../api/reports';
import { calculateDistanceTo } from '../util/locations';
import { formatDateTime } from '../util/converter';

interface Props {
  match: any;
}

export default function Report({ match }: Props) {
  const { reportId } = match.params;
  const [report, setReport] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [distance, setDistance] = useState(3);

  const loadData = useCallback(
    async () => {
      const reportData = await getReport(reportId);
      setReport(reportData);
      setDistance(await calculateDistanceTo(reportData.location.latitude, reportData.location.longitude))
      setIsLoading(false)
    },
    [reportId]
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      {
        (!isLoading && !report) ?
          <NotFound/> :
          <Layout>
            {
              isLoading ?
              <Loader/> :
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      { report.title }
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      { formatDateTime(report.createdAt) }, etwa { distance } Kilometer entfernt
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <DescriptionListItem label="Beschreibung">
                        { report.description }
                      </DescriptionListItem>
                      <DescriptionListItem
                        backgroundColorClass="bg-white"
                        label="Kategorie"
                      >
                        { report.category.name }
                      </DescriptionListItem>
                      <DescriptionListItem label="Ort">
                        {`${report.municipality.name}, ${report.municipality.country}`}
                      </DescriptionListItem>
                      {
                        report.comments.length > 0 &&
                        <CommentList>{ report.comments }</CommentList>
                      }
                    </dl>
                  </div>
                </div>
            }
          </Layout>
      }
    </>
  );
}