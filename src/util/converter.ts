export function formatDateTime(dateTime: string) {
  const dateObj = new Date(dateTime);
  const date = dateObj.getDate();
  const month = dateObj.toLocaleString('de-at', { month: 'long' });
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = (dateObj.getMinutes()<10?'0':'') + dateObj.getMinutes();
  return `${date} ${month} ${year} um ${hours}:${minutes} Uhr`;
}