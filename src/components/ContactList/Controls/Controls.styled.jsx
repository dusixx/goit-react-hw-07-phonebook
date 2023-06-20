import styled from '@emotion/styled';
import { ButtonBase, FlexCentered } from 'styles/shared';
import { calcCSSValue } from 'utils';

export const ControlsList = styled.ul`
  ${FlexCentered('gap: 5px')};
  height: ${({ height }) => calcCSSValue(height) || '100%'};
  width: 100%;
  user-select: none;
`;

export const Control = styled.li`
  height: 100%;
`;

export const ControlBtn = styled(ButtonBase)`
  height: 100%;
  color: #c5c5c5;

  &:hover,
  &:focus-visible {
    color: var(--color-accent);
  }
`;

export const Processing = styled.div`
  ${FlexCentered('gap: 4px')};
  height: 100%;
  font-size: 11px;
  color: rgb(0 0 0 / 0.8);
  user-select: none;

  @media screen and (min-width: 360px) {
    font-size: 12px;
  }
`;
