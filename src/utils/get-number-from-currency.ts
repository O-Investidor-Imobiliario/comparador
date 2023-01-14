export const getNumberFromCurrency = (currency: string): number => {
  return parseFloat(
    currency.replace("R$ ", "").replaceAll(".", "").replace(",", ".")
  );
};
