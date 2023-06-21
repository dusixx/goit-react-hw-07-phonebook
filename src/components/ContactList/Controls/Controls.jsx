import { string, number, objectOf, oneOfType, func } from 'prop-types';
import { ControlsList, Control, ControlBtn } from './Controls.styled';
import { cap } from 'utils';

//
// Controls
//

export const Controls = ({ items, targetId, height, onClick }) => {
  return (
    <ControlsList height={height}>
      {Object.entries(items).map(([name, Icon]) => {
        return (
          <Control key={name}>
            <ControlBtn
              type="button"
              title={cap(name)}
              onClick={() => onClick(targetId, name.toLocaleLowerCase())}
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
  onClick: func,
  items: objectOf(func),
  targetId: string,
  height: oneOfType([string, number]),
};
