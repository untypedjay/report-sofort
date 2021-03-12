const ENDPOINT_IPIFY = 'https://api.ipify.org?format=json';
const ENDPOINT_IPGEOLOCATION = 'http://ip-api.com/json';

const requestOptions: any = {
  method: 'GET',
  redirect: 'follow'
};

export async function getClientLocation() {
  const ipResponse = await fetch(ENDPOINT_IPIFY);
  const ipResponseBody = await ipResponse.json();

  const locationResponse = await fetch(`${ENDPOINT_IPGEOLOCATION}/${ipResponseBody.ip}`, requestOptions);
  const locationResponseBody = await locationResponse.json();
  return {
    lat: locationResponseBody.lat,
    lon: locationResponseBody.lon
  };
}