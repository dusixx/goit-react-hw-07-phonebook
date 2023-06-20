import { toast, ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Header } from 'components/Header';
import { SpinnerLines } from 'components/SpinnerLines/SpinnerLines';
import { useFetchedContacts } from 'hooks/useFetchedContacts';

const NO_CONTACTS = 'There are no contacts in the phone book yet';
const Error = ({ message }) => void toast.error(message);

//
// App
//

export const App = () => {
  const { items, pendingAction, error } = useFetchedContacts();

  return (
    <Container>
      <Error message={error} />
      <Header />
      <ContactEditor />

      {items.length > 0 && (
        <>
          <Filter />
          <ContactList rowHeight={40} controlsHeight="60%" />
        </>
      )}

      {items.length === 0 &&
        (/fetchAll/i.test(pendingAction) ? <SpinnerLines /> : NO_CONTACTS)}

      <ToastContainer
        autoClose={1500}
        position="top-center"
        progressStyle={{ height: '3px' }}
      />
    </Container>
  );
};
