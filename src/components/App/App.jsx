import { toast, ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Header } from 'components/Header';
import { SpinnerLines } from 'components/SpinnerLines';
import { useFetchContacts } from 'hooks/useFetchContacts';

const NO_CONTACTS = 'There are no contacts in the phone book yet';
const Error = ({ message }) => {
  toast.error(message);
};

//
// App
//

export const App = () => {
  const { items: contacts, pendingAction, error } = useFetchContacts();

  return (
    <Container>
      <Error message={error} />
      <Header />
      <ContactEditor />

      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList rowHeight={40} controlsHeight="60%" />
        </>
      )}

      {contacts.length === 0 &&
        (/fetchContacts/i.test(pendingAction) ? <SpinnerLines /> : NO_CONTACTS)}

      <ToastContainer
        autoClose={1500}
        position="top-center"
        progressStyle={{ height: '3px' }}
      />
    </Container>
  );
};
