import { useState } from 'react';
import { Form, List } from '../../components';
import { useLazyQuery } from "@apollo/client";
import { GET_RATES } from '../../lib/query';
import styled from 'styled-components/macro';

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
const dataMock = [
  {
    marketSymbol: 'string',
    lastPrice: 'string'
  }
]

export const Main = () => {
  const [getCurrency, { loading, error, data }] = useLazyQuery(GET_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleSubmit = (currency: string) => {
    getCurrency({ variables: { currency } });
    // dataMock.push({ marketSymbol: currency, lastPrice: data.markets[0].ticker.lastPrice });
    console.log(data);
  }

  return (
    <Wrapper>
      <div>
        <Title>Now you can track all your cryptos here!</Title>
        <Text>Just enter the cryptocurrency code on the form to the right.</Text>
      </div>
      <Form onSubmit={(currency) => getCurrency({ variables: { currency } })}/>
      <List dataList={dataMock} />
    </Wrapper>
  )
};