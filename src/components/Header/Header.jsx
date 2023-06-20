import { IconContactsBook } from 'styles/icons';
import { Container, Logo } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <Logo href="./">
        <IconContactsBook size={22} />
        PhoneBook
      </Logo>
    </Container>
  );
};
