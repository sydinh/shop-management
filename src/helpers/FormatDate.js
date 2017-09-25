export const formatDate = date => {
  const convertNumbersToDate = Date(date);
  const dateObj = new Date(convertNumbersToDate);
  const getFullDate = `${dateObj.getMonth() + 1} / ${dateObj.getDate()} / ${dateObj.getFullYear()}`;
  return getFullDate;
};
