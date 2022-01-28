import { ListItemAvatar, IconButton, Avatar } from '@mui/material';
import { ReactComponent as ItemIcon} from '../../assets/icon.svg';
import { ReactComponent as DeleteIcon} from '../../assets/deleteIcon.svg';
import { StyledList, StyledItem } from './style';
import { IItem } from '../../types/types';

interface IProps {
  data: IItem[];
  onDelete: (e: React.SyntheticEvent, currency: string) => void;
}

export const List = ({ data, onDelete }: IProps) => (
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
    </StyledItem>
    ))}
  </StyledList>
);
