import { useLazyQuery } from "@apollo/client";
import { TextField, Button } from '@mui/material';
import { GET_RATES } from '../../lib/query';

interface IForm {
  onSubmit: (currency: any) => void;
}

export const Form = ({ onSubmit }) => {
  const [getCurrency, { loading, error, data }] = useLazyQuery(GET_RATES);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      currency: { value: string };
    };
    const сurrency = target.currency.value;
    onSubmit(сurrency, data?.markets[0].ticker.lastPrice);
    getCurrency({ variables: { сurrency } });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextField type='text' name="currency" />
        <Button type="submit">Add</Button>
      </div>
      <p></p>
    </form>
  );
}