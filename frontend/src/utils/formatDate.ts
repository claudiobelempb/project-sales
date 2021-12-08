const formatDate = (date: string): string => {
  const dateFormatted = new Date(date);
  const day =
    dateFormatted.getDay() > 9
      ? dateFormatted.getDay()
      : `0${dateFormatted.getDay()}`;
  const month =
    dateFormatted.getMonth() + 1 > 9
      ? dateFormatted.getMonth() + 1
      : `0${dateFormatted.getMonth() + 1}`;
  const year = dateFormatted.getFullYear();

  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat("pt-BR").format(
    new Date(`${year}-${month}-${day}T15:16:23.000Z`)
  );
};

const formatDateRo = (date: string): string => {
  // return new Intl.DateTimeFormat("pt-BR").format(new Date(data));
  const data = new Date(date);
  console.log(data);
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(23);
  // return new Intl.DateTimeFormat("pt-BR", {
  //   dateStyle: "full",
  //   timeStyle: "long",
  // }).format(new Date("2019-10-01T15:43:40.394Z"));
};

export { formatDate, formatDateRo };
