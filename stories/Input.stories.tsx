import { MdSearch } from 'react-icons/md'
import { Input } from '../src'

export default {
	title: 'Input',
	component: Input,
}

export const Default = {
	args: {
		secondary: false,
		onChange: console.log,
		placeholder: 'This is a placeholder',
		minimal: false,
		icon: <span>😄</span>,
		right: false,
		readOnly: false,
		required: false,
		autoComplete: 'off',
		error: false,
	},
}

export const Minimal = {
	args: {
		secondary: false,
		onChange: console.log,
		placeholder: 'Click to search!',
		minimal: true,
		icon: <MdSearch />,
		right: false,
		readOnly: false,
		required: false,
		autoComplete: 'off',
		error: false,
	},
}
