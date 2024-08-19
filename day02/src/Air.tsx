import Date from './Date';
import Price from './Price';

type AirProps = {
  dateProps: {
    month: string;
    date: string;
    day: string;
  };
  priceProps: {
    price: number;
  };
};

const Air = (props: AirProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        gap: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#F5F5F5',
      }}
    >
      <Date {...props.dateProps} />
      <Price {...props.priceProps} />
    </div>
  );
};
export default Air;
