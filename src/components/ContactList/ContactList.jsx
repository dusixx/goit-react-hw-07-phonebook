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
  const { filtered, deleteContact } = useContacts();
  const [isWorking, setIsWorking] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const handleControlClick = (id, name) => {
    setClickedId(id);

    switch (name) {
      case 'delete':
        setIsWorking(true);

        return deleteContact(id).finally(() => {
          setIsWorking(false);
          setClickedId(null);
        });

      default:
        toast.warn(ACTION_NOT_SUPPORTED);
    }
  };

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
                {clickedId === id && isWorking ? (
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
