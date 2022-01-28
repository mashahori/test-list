import { useState, useCallback, useEffect } from 'react';
import { ListItem, ListItemAvatar, IconButton, ListItemText, Avatar } from '@mui/material';
import { ReactComponent as ItemIcon} from '../../assets/icon.svg';
import { ReactComponent as DeleteIcon} from '../../assets/deleteIcon.svg';
import { Form, List } from '../../components';
import { useLazyQuery } from "@apollo/client";
import { GET_RATES } from '../../lib/query';
import styled from 'styled-components/macro';
import { client } from '../../lib/apolloClient';
import { stringify } from 'querystring';

const Wrapper = styled.main`
  padding-top: 100px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  max-width: 600px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-weight: 100;
  font-size: 40px;
  max-width: 400px;
`;

interface IItem {
  currency: string;
  price: string;
}



export const Main = () => {
  const [list, setList] = useState<IItem[]>([]);

  const handleAddItem = (currency, price) => {
    if (!list.find((el) => el.currency === currency)) {
      setList([...list, { currency, price }]);
    }
  }

  const handleDeleteItem = (e, currency) => {
    console.log(currency);
    setList(list.filter((el) => el.currency !== currency));
  }

  return (
    <Wrapper>
      <div>
        <Title>Now you can track all your cryptos here!</Title>
        <Text>Just enter the cryptocurrency code on the form to the right.</Text>
      </div>
      <Form onSubmit={handleAddItem}/>
      <List data={list} onDelete={handleDeleteItem} />
    </Wrapper>
  )
};