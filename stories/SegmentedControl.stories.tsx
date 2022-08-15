import { SegmentedControl } from '../src'

export default {
	title: 'SegmentedControl',
	component: SegmentedControl,
}

export const Default = {
	args: {
		onChange: console.log,
		options: [
			{
				label: 'Option 1',
				id: '0',
			},
			{
				label: 'Option 2',
				id: '1',
			},
			{
				label: 'Option 3',
				id: '2',
			},
		],
		secondary: false,
		value: '0',
	},
}
