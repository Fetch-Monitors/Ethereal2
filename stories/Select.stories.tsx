import { Chip, Select } from '../src'

export default {
	title: 'Select',
	component: Select,
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

const stuff = new Array(70).fill(0)

export const BigList = {
	args: {
		onChange: console.log,
		options: stuff.map((_, i) => ({
			label: `Option ${i}`,
			hint: `This is option ${i}`,
			id: `${i}`,
		})),
	},
}

export const CustomList = {
	args: {
		onChange: console.log,
		options: stuff.map((_, i) => ({
			custom: <Chip>Custom JSX</Chip>,
			label: `Option ${i}`,
			hint: `This is option ${i}`,
			id: `${i}`,
		})),
	},
}

export const Multi = {
	args: {
		onChange: console.log,
		multi: true,
		options: stuff.map((_, i) => ({
			label: `Option ${i}`,
			hint: `This is option ${i}`,
			id: `${i}`,
		})),
	},
}

export const CustomMulti = {
	args: {
		onChange: console.log,
		multi: true,
		options: stuff.map((_, i) => ({
			custom: <Chip>Custom JSX</Chip>,
			label: `Option ${i}`,
			hint: `This is option ${i}`,
			id: `${i}`,
		})),
	},
}
