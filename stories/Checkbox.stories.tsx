import { Checkbox } from '../src';

export default {
  title: 'Checkbox',
  component: Checkbox
}

export const On = {
  args: {
    onChange: console.log,
    secondary: false,
    value: true,
  }
}

export const Off = {
  args: {
    onChange: console.log,
    secondary: false,
    value: false,
  }
}