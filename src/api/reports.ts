const ENDPOINT = 'https://stage.buergermeldungen.com/graphql';

export async function getReports() {
  const response = await fetch(ENDPOINT, {
    method:'POST',
    headers: {'content-type': 'application/json' },
    body:JSON.stringify({query: reportQuery})
  })

  const responseBody = await response.json();
  return responseBody.data.reports.data;
}

const reportQuery = `{
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