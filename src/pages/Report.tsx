import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import NotFound from './NotFound';
import { getReport } from '../api/reports';
import { CommentList } from '../components/CommentList';

interface Props {
  match: any;
}

export default function Report({ match }: Props) {
  const { reportId } = match.params;
  const [report, setReport] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {
    const response = await getReport(reportId);
    console.log(response)
    setReport(response);
    setIsLoading(false)
  };

  return (
    <>
      {
        (!isLoading && !report) ?
          <NotFound/> :
          <Layout>
            {
              isLoading ?
              <p>Loadding...</p> :
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      { report.title }
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      { report.createdAt }
                    </p>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Beschreibung
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          { report.description }
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Kategorie
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          { report.category.name }
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                          Ort
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {report.municipality.name}, {report.municipality.country}
                        </dd>
                      </div>

                      <CommentList>{ report.comments }</CommentList>
                    </dl>
                  </div>
                </div>
            }
          </Layout>
      }
    </>
  );
}