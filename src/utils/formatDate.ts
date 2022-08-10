const formatDate = (date: string): string => {
  const dateFormated = new Date(date);
  const year = dateFormated.getUTCFullYear();

  const day = dateFormated.getUTCDate() > 9 ? dateFormated.getUTCDate() : `0${dateFormated.getUTCDate()}`;
  const month = dateFormated.getUTCMonth() + 1 > 9 ? dateFormated.getUTCMonth() + 1 : `0${dateFormated.getUTCMonth() + 1}` ;

  return `${day}/${month}/${year}`
};

export default formatDate;