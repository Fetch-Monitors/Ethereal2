import { Button } from '../src'

export default {
	title: 'Button',
	component: Button,
}

export const Primary = {
	args: {
		children: 'My Button',
		disabled: false,
		secondary: false,
		loading: false,
		outlined: false,
		text: false,
	},
}

export const Secondary = {
	args: {
		children: 'My Button',
		disabled: false,
		secondary: true,
		loading: false,
		outlined: false,
		text: false,
	},
}
