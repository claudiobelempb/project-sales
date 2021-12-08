const RANDOM_NUMBER = (min: number, max: number, multiple: number) => {
  return Math.round((Math.random() * (max - min)) / multiple) * multiple + min;
};

const RANDOM_STRING = (tamanho: number) => {
  var stringAleatoria = "";
  var caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < tamanho; i++) {
    stringAleatoria += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return stringAleatoria.toLocaleLowerCase();
};

const FORMAT_DATE_RO = (date: string): string => {
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

const FORMAT_DATE = (date: string): string => {
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

const FORMAT_PRICE_RO = (value: number): string => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

const FORMAT_PRICE = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export { RANDOM_NUMBER, RANDOM_STRING, FORMAT_DATE, FORMAT_PRICE };
