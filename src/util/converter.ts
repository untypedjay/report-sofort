export function formatDateTime(dateTime: string) {
  const dateObj = new Date(dateTime);
  const date = dateObj.getDate();
  const month = dateObj.toLocaleString('de-at', { month: 'long' });
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = (dateObj.getMinutes()<10?'0':'') + dateObj.getMinutes();
  if (!date || !month || !year || !hours || !minutes) {
    return '';
  }
  return `${date}. ${month} ${year} um ${hours}:${minutes} Uhr`;
}