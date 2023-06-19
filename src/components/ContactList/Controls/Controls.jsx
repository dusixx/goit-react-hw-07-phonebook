import { string, number, objectOf, oneOfType, func } from 'prop-types';
import { ControlsList, Control, ControlBtn } from './Controls.styled';
import { getId, cap } from 'utils';
import { useContacts } from 'redux/hooks';
import { toast } from 'react-toastify';

const ACTION_NOT_SUPPORTED = 'Action not supported';

//
// Controls
//

export const Controls = ({ items, targetId, height }) => {
  const { remove } = useContacts();

  // TODO: добавить edit
  const handleControlClick = (id, controlName) => {
    switch (controlName) {
      case 'delete':
        return remove(id);
      default:
        toast.warn(ACTION_NOT_SUPPORTED);
    }
  };

  return (
    <ControlsList height={height}>
      {Object.entries(items).map(([name, Icon]) => {
        return (
          <Control key={getId()}>
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
