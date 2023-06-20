import { useState } from 'react';
import { TextField } from 'components/TextField';
import { Form, Button } from './ContactEditor.styled';
import { IconUserPlus } from 'styles/icons';
import { fieldData } from './fieldData';
import { useContacts } from 'redux/hooks';
import { formatNumber } from 'utils';
import { toast } from 'react-toastify';
import { Block } from 'styles/shared';
import { SpinnerLines } from 'components/SpinnerLines';

const ALREADY_EXISTS = `The contact with the same name or number already exists`;
const ADDED_SUCCESS = `The contact was added successfully`;

//
// ContactEditor
//

const formatName = s => s.trim().replace(/\s+/g, ' ');

export const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isWorking, setIsWorking] = useState(false);
  const { items: contacts, addContact } = useContacts();

  const resetForm = e => {
    setName('');
    setNumber('');
  };

  const isContactExists = ({ name, number }) =>
    contacts.find(
      itm =>
        itm.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
        itm.number === number
    );

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: formatName(name),
      number: formatNumber(number),
    };

    if (isContactExists(data)) return toast.error(ALREADY_EXISTS);

    setIsWorking(true);
    addContact(data).then(() => setIsWorking(false));
    resetForm();
    toast.success(ADDED_SUCCESS);
  };

  return (
    <Block style={{ padding: '15px' }}>
      <Form onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder="name"
          height="var(--field-height)"
          autoComplete="off"
          pattern={fieldData.name.pattern}
          title={fieldData.name.title}
          icon={fieldData.name.icon}
          value={name}
          onChange={e => setName(e?.target.value ?? '')}
          required
        />

        <TextField
          name="number"
          placeholder="number"
          height="var(--field-height)"
          type="tel"
          autoComplete="off"
          pattern={fieldData.number.pattern}
          title={fieldData.number.title}
          icon={fieldData.number.icon}
          value={number}
          onChange={e => setNumber(e?.target.value ?? '')}
          required
        />

        <Button type="submit">
          {isWorking && <SpinnerLines width={25} strokeColor="white" />}
          {!isWorking && (
            <>
              <IconUserPlus size="20px" />
              Add
            </>
          )}
        </Button>
      </Form>
    </Block>
  );
};
