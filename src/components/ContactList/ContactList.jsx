import { string, oneOfType, number } from 'prop-types';
import { Controls } from './Controls/Controls';
import { controlsData } from './controlsData';
import { List, Item, Column } from './ContactList.styled';
import { useContacts, useFilter } from 'redux/hooks';
import { Block } from 'styles/shared';

//
// helpers
//

const filterContacts = (contacts, filter) => {
  const searchStr = filter?.trim().toLocaleLowerCase();

  return searchStr
    ? contacts?.filter(
        ({ name, number }) =>
          name.toLocaleLowerCase().includes(searchStr) ||
          number.includes(searchStr)
      )
    : contacts;
};

//
// ContactList
//

export const ContactList = ({ controlsHeight, rowHeight }) => {
  const { filter } = useFilter();
  const { items: contacts } = useContacts();

  const filtered = filterContacts(contacts, filter);
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
