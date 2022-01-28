import { useMemo, useState, useEffect } from 'react';
import { ListItem, ListItemAvatar, IconButton, ListItemText, Avatar } from '@mui/material';
import { ReactComponent as ItemIcon} from '../../assets/icon.svg';
import { ReactComponent as DeleteIcon} from '../../assets/deleteIcon.svg';
import { client } from '../../lib/apolloClient';
import { GET_RATES } from '../../lib/query';

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

export const List = ({ data, onDelete }) => {
  return (
    <ul>
      {data?.map(({ currency, price }) => (
        <ListItem
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
        <ListItemText
          primary={currency}
          secondary={price}
        />
      </ListItem>
      ))}
    </ul>
  );
}
