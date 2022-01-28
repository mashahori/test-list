import { useMemo, useState, useEffect } from 'react';
import { ListItem, ListItemAvatar, IconButton, ListItemText, Avatar } from '@mui/material';
import { ReactComponent as ItemIcon} from '../../assets/icon.svg';
import { ReactComponent as DeleteIcon} from '../../assets/deleteIcon.svg';
import { client } from '../../lib/apolloClient';
import { GET_RATES } from '../../lib/query';
import styled from 'styled-components/macro';

interface IProps {
  currency: string;
  price: string;
}

// interface Props {
//   dataList: IItem[];
// }

// const dataMock = [
//   {
//     marketSymbol: 'string',
//     lastPrice: 'string'
//   }
// ]
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

export const List = ({ data, onDelete }) => {
  return (
    <StyledList>
      {data?.map(({ currency, price }) => (
        <StyledItem
        key={currency}
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={(e) => onDelete(e, currency)}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <ItemIcon />
          </Avatar>
        </ListItemAvatar>
        <p>
          <span>{currency}</span>
          <span>{price}</span>
        </p>
        {/* <ListItemText
          primary={currency}
          secondary={price}
        /> */}
      </StyledItem>
      ))}
    </StyledList>
  );
}
