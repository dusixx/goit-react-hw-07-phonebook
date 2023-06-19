import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { ContactEditor } from 'components/ContactEditor';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Header } from 'components/Header';

//
// App
//

export const App = () => (
  <Container>
    <Header />
    <ContactEditor />
    <Filter />
    <ContactList rowHeight={40} controlsHeight="60%" />

    <ToastContainer
      autoClose={1500}
      position="top-center"
      progressStyle={{ height: '3px' }}
    />
  </Container>
);
