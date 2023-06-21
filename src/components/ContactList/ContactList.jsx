import { useContacts } from 'redux/hooks';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { string, oneOfType, number } from 'prop-types';
import { Block } from 'styles/shared';
import { Controls } from './Controls/Controls';
import { controlsData } from './controlsData';
import { List, Item, Column } from './ContactList.styled';
import { Processing } from './ContactList.styled';
import { SpinnerLines } from 'components/SpinnerLines/SpinnerLines';

const ACTION_NOT_SUPPORTED = 'Action not supported';

//
// ContactList
//

export const ContactList = ({ controlsHeight, rowHeight }) => {
  const { filtered, deleteContact, pendingAction } = useContacts();
  const [clickedId, setClickedId] = useState(null);

  const handleControlClick = (id, name) => {
    setClickedId(id);

    switch (name) {
      case 'delete':
        return deleteContact(id).finally(() => setClickedId(null));
      default:
        toast.warn(ACTION_NOT_SUPPORTED);
    }
  };

  if (!filtered.length) return null;

  const deletedItemStyle = {
    backgroundColor: 'rgb(255 0 0 / 0.1)',
  };

  return (
    <Block maxHeight="70vh">
      <List>
        {filtered.map(({ id, name, number }) => {
          const isDeleted =
            /deleteContact/i.test(pendingAction) && clickedId === id;

          return (
            <Item
              key={id}
              height={rowHeight}
              style={isDeleted ? deletedItemStyle : null}
            >
              <Column>{name}</Column>
              <Column>{number}</Column>
              <Column>
                {isDeleted ? (
                  <Processing>
                    <SpinnerLines width={20} />
                    Deleting...
                  </Processing>
                ) : (
                  <Controls
                    items={controlsData}
                    height={controlsHeight}
                    targetId={id}
                    onClick={handleControlClick}
                  />
                )}
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
