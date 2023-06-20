import { useState } from 'react';
import { TextField } from 'components/TextField';
import { Form, Button } from './ContactEditor.styled';
import { IconUserPlus } from 'styles/icons';
import { fieldData } from './fieldData';
import { useContacts } from 'redux/hooks';
import { toast } from 'react-toastify';
import { Block } from 'styles/shared';
import { SpinnerLines } from 'components/SpinnerLines/SpinnerLines';
import { formatNumber, formatName, isContactExists } from 'utils';

const ALREADY_EXISTS = `The contact with the same name or number already exists`;
const ADDED_SUCCESS = `The contact was added successfully`;

//
// ContactEditor
//

export const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isWorking, setIsWorking] = useState(false);
  const { items, addContact } = useContacts();

  const resetForm = e => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: formatName(name),
      number: formatNumber(number),
    };

    if (isContactExists(items, data)) {
      return toast.error(ALREADY_EXISTS);
    }

    setIsWorking(true);
    addContact(data)
      .then(() => {
        resetForm();
        toast.success(ADDED_SUCCESS);
      })
      .finally(() => {
        setIsWorking(false);
      });
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
          {isWorking && <SpinnerLines width={20} strokeColor="white" />}
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
