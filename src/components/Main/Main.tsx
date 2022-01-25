import { Form, List } from '../../components';
import styled from 'styled-components/macro';

const Text = styled.div`
  
`;

export const Main = () => (
  <main>
    <Text>
      <h1>Now you can track all your cryptos here!</h1>
      <p>Just enter the cryptocurrency code on the form to the right.</p>
    </Text>
    <Form />
    <List />
  </main>
);