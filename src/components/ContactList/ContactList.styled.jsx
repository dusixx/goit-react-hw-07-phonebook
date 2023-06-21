import styled from '@emotion/styled';
import { FlexCentered } from 'styles/shared';
import { calcCSSValue } from 'utils';

export const List = styled.ul`
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }

  & > li:nth-of-type(odd) {
    background-color: #f0f0f0;
  }
`;

export const Item = styled.li`
  ${FlexCentered('justify-content: space-between')};
  height: ${({ height }) => calcCSSValue(height)};
  padding-left: 10px;
`;

export const Column = styled.span`
  ${FlexCentered()};
  flex-basis: 33.33%;
  height: 100%;
  text-align: center;
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
