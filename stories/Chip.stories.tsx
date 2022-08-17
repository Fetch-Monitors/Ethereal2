import { MdAdsClick } from 'react-icons/md'
import { Chip } from '../src'

export default {
	title: 'Chip',
	component: Chip,
}

export const Default = {
	args: {
		children: 'Click on me!',
		onClick: console.log,
		secondary: false,
		dialog: 'This happens to be conveniently activated by a chip',
		dialogTitle: 'This is a Dialog',
		icon: <MdAdsClick />,
	},
}
