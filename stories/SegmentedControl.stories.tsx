import { useState } from 'react'
import { SegmentedControl } from '../src'

const StatefullSegmentedControl = ({
	options,
	secondary,
	value: defaultValue,
}) => {
	const [value, setValue] = useState(defaultValue)

	return (
		<SegmentedControl
			value={value}
			options={options}
			secondary={secondary}
			onChange={(val) => setValue(val.id)}
		/>
	)
}

export default {
	title: 'SegmentedControl',
	component: StatefullSegmentedControl,
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
