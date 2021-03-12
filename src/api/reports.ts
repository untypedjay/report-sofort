import config from '../util/config.json';
import { getClientLocation } from './location';
import { getMunicipalities } from './municipalities';
import { getDistance } from '../util/locations';

export async function getReports() {
  const response = await fetchData(reportsQuery);
  const responseBody = await response.json();
  return responseBody.data.reports.data;
}

export async function getNewestReports() {
  const response = await fetchData(newestReportsQuery);
  const responseBody = await response.json();
  return responseBody.data.reports.data;
}

export async function getNearestReports() {
  const location = await getClientLocation();
  const municipalities = await getMunicipalities();
  const locations = [];
  for (let i = 0; i < municipalities.length; i++) {
    locations.push({ ...municipalities[i], distance: getDistance(municipalities[i].location.latitude, municipalities[i].location.longitude, location.lat, location.lon) });
  }
  locations.sort((a: any, b: any) => {
    return a.distance - b.distance;
  });

  let reports = null;
  let index = 0;
  while (!reports && index < locations.length) {
    reports = await getReportsByMunicipality(locations[index].id);
  }

  const response = await fetchData(reportsNearbyQuery(reports[0].id));
  const responseBody = await response.json();
  return responseBody.data.reportsNearby.data;
}

export async function getReportsByMunicipality(id: number) {
  const response = await fetchData(reportsByMunicipalityQuery(id));
  const responseBody = await response.json();
  return responseBody.data.reports.data;
}

export async function getReport(id: number) {
  const response = await fetchData(reportQuery(id));
  const responseBody = await response.json();
  return responseBody.data?.report;
}

async function fetchData(query: string) {
  return await fetch(config.graphQLEndpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: query })
  });
}

const reportsQuery = `{
  reports {
    data {
      id,
      category {
        name
      },
      status {
        name
      },
      title,
      description,
      createdAt,
      municipality {
        name
      },
      location {
        latitude,
        longitude
      }
    }
  }
}`;

const newestReportsQuery = `{
  reports(sortType: "createdAt") {
    data {
      id,
      title,
      createdAt,
      status {
        name
      },
      commentCount,
      municipality {
        name,
        country
      },
      location {
        latitude,
        longitude
      }
    }
  }
}`;

const reportsNearbyQuery = (id: number) => {
  return `{
    reportsNearby(reportId: ${id}) {
      data {
        id,
        title,
        createdAt,
        status {
          name
        },
        commentCount,
        municipality {
          name,
          country
        }
      }
    }
  }`;
}

const reportsByMunicipalityQuery = (id: number) => {
  return `{
    reports(municipalityId: ${id}, sortType: "createdAt") {
      data {
        id,
        title,
        createdAt,
        status {
          name
        },
        commentCount,
        municipality {
          name,
          country
        }
      }
    }
  }`;
}

const reportQuery = (id: number) => {
  return `{
    report(id: ${id}) {
      category {
        name,
      },
      title,
      description,
      location {
        latitude,
        longitude
      },
      createdAt,
      commentCount,
      comments {
        text,
        createdAt
      },
      municipality {
        name,
        country
      }
    }
  }`;
}