import { ListItem, ListItemAvatar, IconButton, ListItemText, Avatar } from '@mui/material';
import { ReactComponent as ItemIcon} from '../../assets/icon.svg';
import { ReactComponent as DeleteIcon} from '../../assets/deleteIcon.svg';

interface IItem {
  marketSymbol: string;
  lastPrice: string;
}

interface Props {
  dataList: IItem[];
}

export const List = ( { dataList }: Props) => (
  <ul>
    {dataList.map(({ marketSymbol, lastPrice }) =>(
      <ListItem
        key={marketSymbol}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
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
          primary={marketSymbol}
          secondary={lastPrice}
        />
      </ListItem>
    ))}
  </ul>
);
