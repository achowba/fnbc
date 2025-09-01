export const formatDateToTime = (dateInput: Date | string | number | null | undefined): string => {
  if (dateInput == null) {
    return '';
  };

  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  if (Number.isNaN(date.getTime())) {
    return '';
  };

  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Use a proper 12-hour calculation: convert 0/12 -> 12, otherwise use remainder
  const hour12 = hours % 12 || 12;
  const period = hours >= 12 ? 'PM' : 'AM';

  const minutesStr = minutes.toString().padStart(2, '0');

  return `${hour12}:${minutesStr} ${period}`;
}
