import { useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import { TextField, Button } from '@mui/material';
import { GET_RATES } from '../../lib/query';
import { StyledForm } from './style';

interface IForm {
  onSubmit: (currency: any) => void;
}

export const Form = ({ onSubmit }) => {
  const [getCurrency, { data }] = useLazyQuery(GET_RATES);
  const [value, setValue] = useState('');

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      currency: { value: string };
    };
    const сurrency = target.currency.value;
    await getCurrency({ variables: { сurrency } });
    onSubmit(сurrency, data?.markets[0].ticker.lastPrice);
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <TextField margin="normal" type='text' name="currency" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button color="primary" variant="contained" disabled={!value} type="submit">Add</Button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Maecenas facilisis vehicula libero, a laoreet turpis.
      Donec elit quam, dictum quis massa eget, luctus suscipit nisl.</p>
    </StyledForm>
  );
}