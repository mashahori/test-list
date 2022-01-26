import styled from 'styled-components/macro';

const Wrapper = styled.main`
  padding: 80px 0;
  background-color: #ffffff;
  color: #9F9E98;
  p {
    width: 80%;
    margin: 0 auto;
  }
`;


export const Footer = () => (
  <Wrapper>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Maecenas facilisis vehicula libero, a laoreet turpis.
      Donec elit quam, dictum quis massa eget, luctus suscipit nisl.
      Curabitur porttitor nisl enim. Mauris ut risus nec metus dapibus venenatis efficitur vitae nibh.
      Morbi venenatis accumsan est, sit amet venenatis mauris viverra at. Proin dapibus nisi vel massa facilisis,
      nec scelerisque eros mattis. Donec molestie, justo iaculis cursus congue, elit velit volutpat risus,
      vel dapibus odio lacus ut urna. Mauris aliquet velit quis sapien accumsan convallis.
    </p>
  </Wrapper>
);