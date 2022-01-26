import { Form, List } from '../../components';
import { useQuery } from "@apollo/client";
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
  const [symbol, setSymbol] = useState('');
  const { loading, error, data } = useQuery(GET_RATES, {
    variables: {
      baseSymbol: symbol,
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleSubmit = (symbol) => {
    setSymbol(symbol);
    dataMock.push();
  }

  return (
    <Wrapper>
      <div>
        <Title>Now you can track all your cryptos here!</Title>
        <Text>Just enter the cryptocurrency code on the form to the right.</Text>
      </div>
      <Form onSubmit={handleSubmit}/>
      <List dataList={dataMock} />
    </Wrapper>
  )
};