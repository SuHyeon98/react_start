type PriceProps = {
  price: number;
};

const Price = (props: PriceProps) => {
  const { price } = props;
  return <span>{price.toLocaleString()}</span>;
};

export default Price;
