import { TextField, Button } from '@mui/material';

interface IForm {
  onSubmit: (currency: string) => void;
}

export const Form = ({ onSubmit }: IForm) => {

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // onSubmit(event.currentTarget.value);
    // console.log(event.currentTarget.value);
    const target = e.target as typeof e.target & {
      currency: { value: string };
    };
    const сurrency = target.currency.value; // typechecks!
    onSubmit(сurrency);
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