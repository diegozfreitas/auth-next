import React from 'react';

interface thisComponent {
  children: string;
}

export const Text: React.FC<thisComponent> = ({ children }) => {
  return (
    <span>{children}</span>
  );
};