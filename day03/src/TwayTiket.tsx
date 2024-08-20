import Onsale from './Onsale';
import SoldOut from './SoldOut';

export type TwayPriceProps = {
  currency: 'KRW';
  price: number;
  seats: number;
};

const Tiket = (props: TwayPriceProps) => {
  const IsOnSale = !!props.seats;

  return (
    <div
      style={{
        padding: '20px 0',
        width: '220px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        border: '1px solid #e0e0e0',
      }}
    >
      {IsOnSale ? <Onsale {...props} /> : <SoldOut />}
    </div>
  );
};

export default Tiket;
