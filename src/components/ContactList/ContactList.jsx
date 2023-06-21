import { string, oneOfType, number } from 'prop-types';
import { Controls } from './Controls/Controls';
import { controlsData } from './controlsData';
import { List, Item, Column } from './ContactList.styled';
import { Block } from 'styles/shared';
import { useContacts } from 'redux/hooks';
import { useState } from 'react';
import { toast } from 'react-toastify';
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

  const isDeleting = /deleteContact/i.test(pendingAction);

  return (
    <Block maxHeight="70vh">
      <List>
        {filtered.map(({ id, name, number }) => {
          return (
            <Item key={id} height={rowHeight}>
              <Column>{name}</Column>
              <Column>{number}</Column>
              <Column>
                {clickedId === id && isDeleting ? (
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
