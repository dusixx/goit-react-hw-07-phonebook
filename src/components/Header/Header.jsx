import { useContacts } from 'redux/hooks';
import { IconContactsBook, IconRefresh } from 'styles/icons';
import { ButtonSecondary } from 'styles/shared';
import { Container, Logo } from './Header.styled';

const BTN_TITLE = 'Reset to initial';

export const Header = () => {
  const { update } = useContacts();

  return (
    <Container>
      <Logo href="./">
        <IconContactsBook size={22} />
        PhoneBook
      </Logo>

      {/* !! Нельзя onClick={update} 
        Это равносильно e => update(e) и вызовет ошибку сериализации
      */}
      <ButtonSecondary title={BTN_TITLE} onClick={() => update()}>
        <IconRefresh size={20} />
      </ButtonSecondary>
    </Container>
  );
};
