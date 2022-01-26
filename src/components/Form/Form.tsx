
interface IForm {
  onSubmit: (currency: string) => string;
}

export const Form = ({ onSubmit }: IForm) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(event.currentTarget.nextElementSibling.currency.value);
  };

  return (
  <form onSubmit={(e:React.FormEventonSubmit) => onSubmit()}>
    <div>
      <input type='text' name="currency" />
      <button type="submit">Add</button>
    </div>
    <p></p>
  </form>
);
  }