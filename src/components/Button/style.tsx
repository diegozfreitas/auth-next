import styled from 'styled-components';
import { PaletteColors } from '../../types';

interface cProps {
  color?: PaletteColors;
  fullWidth?: boolean;
}

export const Container = styled.button<cProps>`
  padding: 12px 20px;
  cursor: pointer;
  border: none;
  border-radius: 8px;

  color: ${({ color, theme }) => color ?
    theme.palette[color].text : theme.palette.primary.text};
  background-color: ${({ color, theme }) => color ?
    theme.palette[color].main : theme.palette.primary.main};
  
  ${({ fullWidth }) => fullWidth ? 'width: 100%' : ''};

  &:hover {
    background-color: ${({ color, theme }) => color ?
    theme.palette[color].light : theme.palette.primary.light};
  }
`;
