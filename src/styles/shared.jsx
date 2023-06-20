import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { isStr, calcCSSValue } from 'utils';

// Utils

export const FlexCentered = cssProps => css`
  display: flex;
  align-items: center;
  justify-content: center;
  ${isStr(cssProps) ? css(cssProps) : { ...cssProps }}
`;

export const Disabled = css`
  pointer-events: none;
  filter: grayscale(1);
  opacity: 0.4;
`;

// Button

export const ButtonBase = styled.button`
  ${FlexCentered(`gap: 5px`)}
  padding: 0;

  color: currentColor;
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition-timing-function: var(--trans-func);
  transition-duration: var(--trans-duration);

  &[disabled],
  &[disabled='true'] {
    ${Disabled}
  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  padding-left: ${({ paddingSide }) => calcCSSValue(paddingSide) || '12px'};
  padding-right: ${({ paddingSide }) => calcCSSValue(paddingSide) || '12px'};

  padding-top: 7px;
  padding-bottom: 7px;

  font-size: 14px;
  color: white;

  background-color: var(--color-accent);
  border-radius: var(--border-radius);
  transition-property: filter;

  &:focus-visible,
  &:hover {
    filter: brightness(1.1);
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: #cccccc;
  color: var(--color-black);
  transition-property: filter;

  &:focus-visible,
  &:hover {
    background-color: #cccccc;
    filter: brightness(0.9);
  }
`;

//
// Misc
//

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: ${({ width }) => calcCSSValue(width) || '100%'};
  height: ${({ height }) => calcCSSValue(height)};
  max-height: ${({ maxHeight }) => calcCSSValue(maxHeight)};

  margin-bottom: ${({ marginBottom }) => calcCSSValue(marginBottom)};
  margin-top: ${({ marginTop }) => calcCSSValue(marginTop)};

  background-color: white;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  overflow: auto;
`;

export const Spinner = styled.span`
  display: inline-block;
  width: ${({ size }) => calcCSSValue(size)};
  height: ${({ size }) => calcCSSValue(size)};

  border: 2px solid #000;
  border-bottom-color: transparent;
  border-radius: 50%;

  animation: rotation 1.5s linear infinite;
  opacity: 0.6;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
