export const formatNumber = (price) => {
  const farmatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return farmatter.format(price);
};
