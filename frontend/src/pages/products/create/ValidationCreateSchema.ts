import * as yup from "yup";

const msg = "Campo Obrigatório";
const ValidationCreateSchema = yup.object().shape({
  name: yup.string().trim().required(msg),
  description: yup
    .string()
    .trim()
    .required(msg)
    .min(10, "Minimo de 10 Caracter")
    .max(250, "Maxamino de 250 Caracter"),
  price: yup.string().trim().required(msg),
});

export { ValidationCreateSchema };
