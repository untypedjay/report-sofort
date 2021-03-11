import config from '../util/config.json';

export async function getMunicipalities() {
  const response = await fetchData(municipalitiesQuery);
  const responseBody = await response.json();
  return responseBody.data.municipalities.data;
}

export async function getMunicipalityName(id: number) {
  const response = await fetchData(municipalityQuery(id));
  const responseBody = await response.json();
  return responseBody.data.municipality.name;
}

async function fetchData(query: string) {
  return await fetch(config.graphQLEndpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query: query })
  });
}

const municipalitiesQuery = `{
  municipalities(count: 100) {
    data {
      id,
      name,
      country,
      state,
      district,
      location {
        latitude,
        longitude
      }
    }
  }
}`;

const municipalityQuery = (id: number) => {
  return `{
    municipality(id: ${id}) {
      name
    }
  }`;
}