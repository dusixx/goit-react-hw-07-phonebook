import { useContacts } from 'redux/hooks';
import { IconContactsBook, IconRefresh } from 'styles/icons';
import { ButtonSecondary } from 'styles/shared';
import { Container, Logo } from './Header.styled';
import { initialContacts } from 'data/contacts';

const BTN_TITLE = 'Reset to initial';

export const Header = () => {
  //const { updateContacts } = useContacts();

  return (
    <Container>
      <Logo href="./">
        <IconContactsBook size={22} />
        PhoneBook
      </Logo>

      {/* !! Нельзя onClick={update} 
        Это равносильно e => update(e) и вызовет ошибку сериализации
      */}
      {/* <ButtonSecondary
        title={BTN_TITLE}
        onClick={() => updateContacts(initialContacts)}
      >
        <IconRefresh size={20} />
      </ButtonSecondary> */}
    </Container>
  );
};
