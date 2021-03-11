const ENDPOINT = 'https://stage.buergermeldungen.com/graphql';

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

export async function getReport(id: number) {
  const response = await fetchData(reportQuery(id));
  const responseBody = await response.json();
  return responseBody.data?.report;
}

async function fetchData(query: string) {
  return await fetch(ENDPOINT, {
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
      }
    }
  }
}`;

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