const ENDPOINT = 'https://stage.buergermeldungen.com/graphql';

export async function getReports() {
  const response = await fetch(ENDPOINT, {
    method:'POST',
    headers: {'content-type': 'application/json' },
    body:JSON.stringify({query: reportsQuery})
  })

  const responseBody = await response.json();
  return responseBody.data.reports.data;
}

export async function getReport(id: number) {
  const response = await fetch(ENDPOINT, {
    method:'POST',
    headers: {'content-type': 'application/json' },
    body:JSON.stringify({query: reportQuery(id)})
  })

  const responseBody = await response.json();
  return responseBody.data?.report;
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