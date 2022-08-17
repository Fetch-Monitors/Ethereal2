import { Toggle } from '../src'

export default {
	title: 'Toggle',
	component: Toggle,
}

export const Default = {
	args: {
		onChange: console.log,
		secondary: false,
	},
}

export const On = {
	args: {
		value: true,
	},
}

export const Off = {
	args: {
		value: false,
	},
}
