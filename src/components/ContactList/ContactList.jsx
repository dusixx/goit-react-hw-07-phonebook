import { string, oneOfType, number } from 'prop-types';
import { Controls } from './Controls/Controls';
import { controlsData } from './controlsData';
import { List, Item, Column } from './ContactList.styled';
import { Block } from 'styles/shared';
import { useFilteredContacts } from 'hooks/useFilteredContacts';

//
// ContactList
//

export const ContactList = ({ controlsHeight, rowHeight }) => {
  const { filtered } = useFilteredContacts();

  if (!filtered.length) return null;

  return (
    <Block maxHeight="70vh">
      <List>
        {filtered.map(({ id, name, number }) => {
          return (
            <Item key={id} height={rowHeight}>
              <Column>{name}</Column>
              <Column>{number}</Column>
              <Column>
                <Controls
                  items={controlsData}
                  height={controlsHeight}
                  targetId={id}
                />
              </Column>
            </Item>
          );
        })}
      </List>
    </Block>
  );
};

ContactList.propTypes = {
  rowHeight: oneOfType([string, number]),
};
