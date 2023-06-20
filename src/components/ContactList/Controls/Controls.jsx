import { string, number, objectOf, oneOfType, func } from 'prop-types';
import { ControlsList, Control, ControlBtn } from './Controls.styled';
import { cap } from 'utils';
import { useContacts } from 'redux/hooks';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Processing } from './Controls.styled';
import { SpinnerLines } from 'components/SpinnerLines';

const ACTION_NOT_SUPPORTED = 'Action not supported';

//
// Controls
//

export const Controls = ({ items, targetId, height }) => {
  const { deleteContact } = useContacts();
  const [isWorking, setIsWorking] = useState(false);

  const handleControlClick = (id, controlName) => {
    switch (controlName) {
      case 'delete':
        setIsWorking(true);
        return deleteContact(id).then(() => setIsWorking(false));

      default:
        toast.warn(ACTION_NOT_SUPPORTED);
    }
  };

  if (isWorking) {
    return (
      <Processing>
        <SpinnerLines width={20} />
        Working...
      </Processing>
    );
  }

  return (
    <ControlsList height={height}>
      {Object.entries(items).map(([name, Icon]) => {
        return (
          <Control key={name}>
            <ControlBtn
              type="button"
              title={cap(name)}
              onClick={() =>
                handleControlClick(targetId, name.toLocaleLowerCase())
              }
            >
              <Icon size="100%" />
            </ControlBtn>
          </Control>
        );
      })}
    </ControlsList>
  );
};

Controls.propTypes = {
  items: objectOf(func),
  targetId: string,
  height: oneOfType([string, number]),
};
