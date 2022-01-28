import styled from 'styled-components/macro';
import { ListItem } from '@mui/material';

export const StyledList = styled.ul`
  width: 300px;
  border-radius: 8px;
`;

export const StyledItem = styled(ListItem)`
  && {
    border-bottom: 1px solid #9F9E98;

    span {
      display: block;
    }
  }
`;