import { useState } from 'react';
import { Form, List } from '../../components';
import { Wrapper, Title, Text, Box } from './style';
import { IItem } from '../../types/types';

export const Main = () => {
  const [list, setList] = useState<IItem[]>([]);

  const handleAddItem = (currency:string, price: string) => {
    console.log(currency, price);
    if (!list.find((el) => el.currency === currency)) {
      setList([...list, { currency, price }]);
    }
  }

  const handleDeleteItem = (e: React.SyntheticEvent, currency: string) => {
    setList(list.filter((el) => el.currency !== currency));
  }

  return (
    <Wrapper>
      <Box>
        <div>
          <Title>Now you can track all your cryptos here!</Title>
          <Text>Just enter the cryptocurrency code on the form to the right.</Text>
        </div>
        <Form onSubmit={handleAddItem}/>
      </Box>
      <List data={list} onDelete={handleDeleteItem} />
    </Wrapper>
  )
};