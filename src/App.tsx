import { Footer, Main } from './components';
import styled from 'styled-components';
import { ReactComponent as Logo } from './assets/logo.svg';

const Background = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px;
`;

function App() {
  return (
    <>
      <Background>
        <Logo />
        <Main />
      </Background>
      <Footer />
    </>
  );
}

export default App;
