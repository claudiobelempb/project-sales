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
  // console.log(data);
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

const FORMAT_BIG_DECIMAL = (value: string): number => {
  if (!value) {
    return 0;
  }
  //2.000,00 -> 2000,00
  value.replace(".", "").replace(",", ".");
  return parseFloat(value);
};

const FORMAT_REAL = (value: any) => {
  const v = ((value.replace(/\D/g, "") / 100).toFixed(2) + "").split(".");

  const m: RegExpMatchArray | null = v[0]
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g);
  if (m === null) {
    return "";
  }
  for (let i = 0; i < m.length; i++)
    m[i] = m[i].split("").reverse().join("") + ".";

  const r = m.reverse().join("");

  return r.substring(0, r.lastIndexOf(".")) + "," + v[1];
};

// Show input error
const SHOW_ERROR = (value: any, mensage: string) => {
  const formControll = value.parentElement;
  formControll.className = "form-controll error";
  const small = formControll.querySelector("small");
  small.innerText = mensage;
};

// Show input success
const SHOW_SUCCESS = (value: any, mensage: string) => {
  const formControll = value.parentElement;
  formControll.className = "form-controll success";
  const small = formControll.querySelector("small");
  small.innerText = mensage;
};

// // Check email is valid
const CHECK_EMAIL = (email: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(`${email}.value`.trim())) {
    return SHOW_SUCCESS(email, "Email valid");
  } else {
    return SHOW_ERROR(email, "Email is not valid");
  }
};

// Check required fields campos requiridos
const CHECK_FIELS_REQUIRID = (inputArr: any[]) => {
  inputArr.forEach(function (input: any) {
    if (input.value.trim() === "") {
      return SHOW_ERROR(input, `${GET_FIEL_NAME(input)} is required`);
    } else {
      return SHOW_SUCCESS(input, "");
    }
  });
  return inputArr;
};

// Check input length min e max caracter
const CHECK_LENGTH = (input: any, min: number, max: number) => {
  if (input.value.length < min) {
    return SHOW_ERROR(
      input,
      `${GET_FIEL_NAME(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    return SHOW_SUCCESS(
      input,
      `${GET_FIEL_NAME(input)} must be less than ${max} characters`
    );
  } else {
    return SHOW_SUCCESS(input, "");
  }
};

// Check passwords match checa se os campos são iguais
const CHECK_PASSWORD_MATCH = (input1: string, input2: string) => {
  if (`${input1}.value` !== `${input2}.value`) {
    return SHOW_ERROR(input2, "Passwords do not match");
  }
};

// Get fieldname convert 1º carecter em maisculo
const GET_FIEL_NAME = (input: string) => {
  return `${input}.value`.charAt(0).toUpperCase() + `${input}.value`.slice(1);
};

export {
  RANDOM_NUMBER,
  RANDOM_STRING,
  FORMAT_DATE,
  FORMAT_PRICE,
  FORMAT_PRICE_RO,
  FORMAT_BIG_DECIMAL,
  FORMAT_REAL,
  CHECK_EMAIL,
  CHECK_FIELS_REQUIRID,
  CHECK_LENGTH,
  CHECK_PASSWORD_MATCH,
  GET_FIEL_NAME,
  SHOW_ERROR,
  SHOW_SUCCESS,
};
