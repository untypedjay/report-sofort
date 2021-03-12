import { getClientLocation } from '../api/location';

export async function calculateDistanceTo(latitude: number, longitude: number) {
  const location = await getClientLocation();
  return getDistance(location.lat, location.lon, latitude, longitude);
}

export function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

function deg2rad(deg: number) {
  return deg * (Math.PI/180)
}