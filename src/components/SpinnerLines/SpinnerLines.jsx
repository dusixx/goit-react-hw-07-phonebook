import { RotatingLines } from 'react-loader-spinner';

export const SpinnerLines = ({ width = 40, ...restProps }) => (
  <RotatingLines
    strokeColor="black"
    strokeWidth="3"
    animationDuration="0.75"
    width={width}
    visible={true}
    {...restProps}
  />
);
