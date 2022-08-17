import { Dialog, Radio } from '../src'

export default {
	title: 'Dialog',
	component: Dialog,
}

export const Default = {
	args: {
		isOpen: true,
		onClose: console.log,
		children: <div>This is content</div>,
		title: 'This is a title',
		custom: false,
	},
}

export const CustomContent = {
	args: {
		isOpen: true,
		onClose: console.log,
		children: (
			<div>
				<h5>This is totally custom</h5>
				<Radio
					options={[
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
					]}
					onChange={console.log}
				/>
			</div>
		),
		title: 'This is a title',
		custom: true,
	},
}

export const CustomContentAndAnimation = {
	args: {
		isOpen: true,
		onClose: console.log,
		children: (
			<div>
				<h5>This is totally custom</h5>
				<Radio
					options={[
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
					]}
					onChange={console.log}
				/>
			</div>
		),
		title: 'This is a title',
		custom: true,
		animation: [
			{
				opacity: 0,
				scale: 0.5,
			},
			{
				opacity: 1,
				scale: 1,
			},
			{
				opacity: 0,
				scale: 0.5,
			},
		],
	},
}
