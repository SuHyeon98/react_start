export type OnsaleProps = {
  currency: 'KRW';
  price: number;
  seats: number;
};

const Onsale = ({ currency, price, seats }: OnsaleProps) => {
  return (
    <>
      <span style={{ fontSize: '14px', color: '#808080' }}>{currency}</span>
      <span style={{ fontSize: '24px', color: '##1a1a1a' }}>
        {price.toLocaleString()}
      </span>
      <span style={{ fontSize: '16px', color: '#d22c26' }}>{seats}석</span>
    </>
  );
};

export default Onsale;
