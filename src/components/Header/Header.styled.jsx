import styled from '@emotion/styled';
import { FlexCentered } from 'styles/shared';
import { calcCSSValue } from 'utils';

export const Container = styled.div`
  ${FlexCentered(`justify-content: space-between`)}
  width: ${({ width }) => calcCSSValue(width) || '100%'};
`;

export const Logo = styled.a`
  ${FlexCentered(`gap: 10px`)};

  font-weight: 700;
  font-size: 24px;
  letter-spacing: -1px;
  color: currentColor;

  & svg {
    color: var(--color-accent);
  }
`;
