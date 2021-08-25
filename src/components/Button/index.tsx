import React from 'react'

import { Container } from './style';

import { PaletteColors } from '../../types';

interface PropsComp {
  onClick: () => void;
  children: any;
  fullWidth?: boolean;
  color?: PaletteColors;
}

export const Button: React.FC<PropsComp> = ({
  children,
  onClick,
  ...props
}) => {

  return (
    <Container  {...props} onClick={() => onClick()}>
      {children}
    </Container>
  )
}
