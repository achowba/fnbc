export const formatNumberWithCommas = (input: number) => {
  if (!input || Number.isNaN(input)) {
    return '';
  }

  const str = String(input);
  const [intPart, decPart] = str.split('.');
  const intWithCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decPart !== undefined ? `${intWithCommas}.${decPart}` : intWithCommas;
}
