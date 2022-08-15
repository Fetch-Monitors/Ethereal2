import { Radio } from '../src'

export default {
	title: 'Radio',
	component: Radio,
}

export const Default = {
	args: {
		onChange: console.log,
		options: [
			{
				label: 'Option 1',
				hint: 'This is option 1',
				id: '0',
			},
			{
				label: 'Option 2',
				hint: 'This is option 2',
				id: '1',
			},
			{
				label: 'Option 3',
				hint: 'This is option 3',
				id: '2',
			},
		],
	},
}
