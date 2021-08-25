import React from 'react';
import { Button as CPButton } from '.';

const Decorators = {
  title: 'Button',
  component: CPButton,
  args: {
    children: 'Seu texto',
    fullWidth: false,
  },
  argTypes: {
    children: {
      description: '< Button> children </ Button>',
      defaultValue: 'Seu texto',
      table: {
        defaultValue: { summary: 'nd' },
      },
    },
    color: {
      description: 'Variações de cores',
      options: ['primary', 'secondary', 'tertiary','black', 'white'],
      control: { type: 'select' },
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    fullWidth: {
      defaultValue: false,
      description: 'Deixar o botao expandido de fora a fora!',
      table: {
        defaultValue: { summary: "false" },
      },
      control: {
        type: 'boolean'
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Execute function',
      table: {
        defaultValue: { summary: "nd" },
      },
    }
  },
}

export const Button = (args: any) => <CPButton {...args} />

export default Decorators;
