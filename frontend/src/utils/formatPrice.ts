const formatPrice = (value: number): string => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

const formatPriceRo = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export { formatPrice, formatPriceRo };
