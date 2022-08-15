import { Button } from '../src'

export default {
  title: 'Button',
  component: Button
}

const Template = (args) => ({
  //👇 Your template goes here
});

const PrimaryButton = Template.bind({});

enum ButtonVariant {
  solid = 'solid',
  outlined = 'outlined',
  text = 'text'
}

PrimaryButton.args = {
  variant: ButtonVariant,
  disabled: false,
  secondary: false,
  loading: false,
  outlined: false,
  text: false,
};

export const Primary = {
  args: {
    variant: ButtonVariant.solid,
    children: 'My Button',
    disabled: false,
    secondary: false,
    loading: false,
    outlined: false,
    text: false,
  },
};

export const Secondary = {
  args: {
    variant: ButtonVariant.solid,
    children: 'My Button',
    disabled: false,
    secondary: true,
    loading: false,
    outlined: false,
    text: false,
  },
};