import exp from 'constants';

type DatePorps = {
  month: string;
  date: string;
  day: string;
};

const Date = (props: DatePorps) => {
  const { month, date, day } = props;
  return (
    <span style={{ fontSize: '16px', color: '#4d4d4d' }}>
      {month}-{date}-{day}
    </span>
  );
};

export default Date;
