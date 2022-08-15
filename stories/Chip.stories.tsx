import { Chip } from '../src';

export default {
  title: 'Chip',
  component: Chip
}

export const Default = {
  args: {
    children: 'My Chip',
    onClick: console.log,
    secondary: false,
    dialog: 'This is a dialog',
    dialogTitle: 'This is a dialog title',
    icon: <span>😄</span>,
  }
}