import { IconFilter } from 'styles/icons';
import { TextField } from 'components/TextField';
import { useContacts, useFilter } from 'redux/hooks';
import { Block } from 'styles/shared';

export const Filter = () => {
  const { filter, update } = useFilter();
  const { contacts } = useContacts();

  if (!contacts.length) return null;

  return (
    <Block style={{ padding: '10px' }}>
      <TextField
        icon={IconFilter}
        height="var(--field-height)"
        name="filter"
        placeholder="Filter"
        autoComplete="off"
        onChange={e => update(e?.target.value ?? '')}
        value={filter}
      />
    </Block>
  );
};
