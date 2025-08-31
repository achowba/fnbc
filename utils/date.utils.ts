export const formatDateToTime = (dateInput: Date | string | number | null | undefined): string => {
  if (dateInput == null) {
    return '';
  };

  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  if (Number.isNaN(date.getTime())) {
    return '';
  };

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const hourRemainder = hours % 12;
  const period = hours >= 12 ? 'PM' : 'AM';

  if (hourRemainder === 0) {
    hours = 12
  };

  const minutesStr = minutes.toString().padStart(2, '0');

  return `${hours}:${minutesStr} ${period}`;
}
