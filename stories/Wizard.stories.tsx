/* eslint-disable no-alert */
import { MdInfoOutline } from 'react-icons/md'
import { FaEquals, FaGreaterThan, FaLessThan, FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { Chip, IData, IWizard, Wizard } from '../src'

const createPromise = (e: any) =>
	new Promise<true | Error>((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.1) {
				resolve(true)
			} else {
				reject(new Error('Ooops'))
			}
		}, 10)
	})

const default_state = {
	steps: [
		{
			name: 'Create a Fetch Monitor',
			segments: [
				{
					title: 'Site Settings',
					options: [
						{
							label: 'Site URL',
							hint: 'Make sure to enter a valid url',
							placeholder: 'Please enter URL for your site',
							component: 'input',
							id: 'siteUrl',
							/* Props: { icon: <MdRestartAlt />, right: true }, */
							validator: (v: string) => v.includes('https://'),
						},
						{
							label: 'RenderJS',
							hint: (
								<>
									Supports dynamic sites{' '}
									<Chip
										icon={<MdInfoOutline />}
										dialog="Enable RenderJS to support sites that need to load additional content. Needed for sites like Twitter or Opensea. If your site loads in with missing content, try this setting."
									>
										Learn more
									</Chip>
								</>
							),
							component: 'toggle',
							id: 'renderJs',
						},
						{
							label: 'Premium Proxies',
							hint: 'Hidden proxies to work on tougher sites',
							component: 'toggle',
							id: 'premiumProxies',
						},
						{
							label: 'Click meee !',
							component: 'button',
							id: 'button',
							onClick: () => alert('Hello'),
						},
						{
							label: 'Alert',
							hint: 'Choose which alerts you want to use',
							component: 'select',
							id: 'select1',
							onClick: () => alert('Hello'),
							props: { isMulti: true },
							choices: [
								{
									label: 'Always',
									hint: 'Alert whenever the task runs',
									id: 'always',
								},
								{
									label: 'Any Change',
									hint: 'Alert whenever a change is detected',
									id: 'any',
								},
								{
									label: 'Keyword Detection',
									hint: 'Alert whenever a keyword is detected',
									id: 'keyword',
								},
							],
						},
						{
							label: 'Alert',
							hint: 'Choose which alerts you want to use',
							component: 'select',
							id: 'select',
							onClick: () => alert('Hello'),
							choices: [
								{
									label: 'Always',
									hint: 'Alert whenever the task runs',
									id: 'always',
								},
								{
									label: 'Any Change',
									hint: 'Alert whenever a change is detected',
									id: 'any',
								},
								{
									label: 'Keyword Detection',
									hint: 'Alert whenever a keyword is detected',
									id: 'keyword',
								},
							],
						},
					],
				},
			],
			progress: 0,
			back() {
				alert('Go back')
			},
			next: (e: any) => createPromise(e),
		},
		{
			name: 'Data Processing',
			segments: [
				{
					title: 'Data Extractor',
					options: [
						{
							label: 'Path (x-path)',
							hint: 'Hello',
							placeholder: 'Please use the selector',
							component: 'tag',
							id: 'path',
						},
						{
							component: 'segmentedControl',
							choices: [
								{
									label: 'Text',
									hint: 'Extract text from the page',
									id: 'raw',
									options: [
										{
											label: 'Selected Text',
											hint: 'Enable url to blah blah blah',
											placeholder: 'No data',
											component: 'tag',
											id: 'data',
										},
										{
											component: 'radio',
											divider: true,
											label: 'Alerts',
											hint: 'Specify how you would like to trigger alerts',
											choices: [
												{
													label: 'Always',
													hint: 'Alert whenever the task runs',
													id: 'always',
												},
												{
													label: 'Any Change',
													hint: 'Alert whenever a change is detected',
													id: 'any',
												},
												{
													label: 'Keyword Detection',
													hint: 'Alert whenever a keyword is detected',
													id: 'keyword',
													options: [
														{
															label: 'Keyword',
															placeholder: 'Please enter keyword',
															component: 'input',
															props: { icon: <FaSearch /> },
															id: 'keyword',
														},
													],
												},
											],
											id: 'alertType',
										},
									],
								},
								{
									label: 'Numeric',
									hint: 'Parse numeric values. Enables numeric comparisons',
									id: 'numeric',
									options: [
										{
											label: 'Selected Number',
											hint: '...',
											placeholder: 'No data',
											component: 'tag',
											id: 'data',
											type: 'number',
										},
										{
											component: 'radio',
											divider: true,
											label: 'Alerts',
											hint: 'Specify how you would like to trigger alerts',
											choices: [
												{
													label: 'Increase',
													hint: 'Selection increases in value',
													id: 'increase',
												},
												{
													label: 'Decrease',
													hint: 'Selection decreases in value',
													id: 'decrease',
												},
												{
													label: 'Ceiling',
													hint: 'Selection exceeds a value',
													id: 'greaterThan',
													options: [
														{
															label: 'Ceiling',
															placeholder: 'Please enter a ceiling',
															component: 'input',
															props: {
																icon: <FaGreaterThan />,
																type: 'number',
															},
															id: 'greaterThan',
														},
													],
												},
												{
													label: 'Floor',
													hint: 'Selection falls below value',
													id: 'lessThan',
													options: [
														{
															label: 'Floor',
															placeholder: 'Please enter a floor',
															component: 'input',
															props: {
																icon: <FaLessThan />,
																type: 'number',
															},
															id: 'lessThan',
														},
													],
												},
												{
													label: 'Equals',
													hint: 'Selection equals a value',
													id: 'equals',
													options: [
														{
															label: 'Equals',
															placeholder: 'Please enter a value',
															component: 'input',
															props: {
																icon: <FaEquals />,
																type: 'number',
															},
															id: 'equals',
														},
													],
												},
											],
											id: 'alertType',
										},
									],
								},
							],
							id: 'dataType',
						},
					],
				},
			],
			progress: 0,
			back() {
				console.log('back')
			},
			next: (e: any) => createPromise(e),
		},
		{
			name: 'Notification Settings',
			segments: [
				{
					title: 'Repeat Options',
					options: [
						{
							label: 'Rate',
							placeholder: 'Please enter the repeat rate',
							component: 'input',
							id: 'rate',
						},
						{
							component: 'radio',
							label: 'Repeat Unit',
							hint: 'Specify the unit you want',
							choices: [
								{
									label: 'Seconds',
									hint: 'Set the unit to seconds',
									id: 'seconds',
								},
								{
									label: 'Minutes',
									hint: 'Set the unit to seconds',
									id: 'minutes',
								},
								{
									label: 'Hours',
									hint: 'Set the unit to seconds',
									id: 'hours',
								},
								{
									label: 'Days',
									hint: 'Set the unit to seconds',
									id: 'days',
								},
							],
							id: 'rateUnit',
						},
						{
							label: 'Stop on Notify',
							hint: 'Stop a task once a notification is sent',
							component: 'toggle',
							id: 'stopOnNotify',
						},
					],
				},
			],
			progress: 0,
			back() {
				console.log('back')
			},
			next: (e: any) => createPromise(e),
		},
	],
	step: 0,
	onSubmit: (e: any) => createPromise(e),
	onExit: () => alert('Exit'),
}

const default_data = {
	siteUrl: { value: 'https://www.google.com', error: '' },
	renderJs: { value: true, error: '' },
	premiumProxies: { value: true, error: '' },
	path: {
		value: '/html[1]/body[1]/div[1]/main[1]/div[1]/nav[1]/ul[1]/li[3]/a[1]',
		error: '',
	},
	dataType: { value: 'raw', error: '' },
	data: { value: 'jajksdahgj99.7kl;asl;kdg', error: '' },
	alertType: { value: 'always', error: '' },
	keyword: { value: '', error: '' },
	greaterThan: { value: 0, error: '' },
	lessThan: { value: 0, error: '' },
	equals: { value: 0, error: '' },
	rateUnit: { value: 'minutes', error: '' },
	rate: { value: 10, error: '' },
	stopOnNotify: { value: false, error: '' },
	select: { value: 'always', error: '' },
	select1: { value: ['always', 'any'], error: '' },
}

const WizardTemplate = () => {
	const [state, setState] = useState<IWizard>(default_state)
	const [data, setData] = useState<IData>(default_data)

	return (
		<div
			style={{
				width: '100%',
				maxHeight: '100vh',
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				overflowX: 'clip',
				border: '2px solid grey',
			}}
		>
			<Wizard
				state={state}
				data={data}
				setWizard={setState}
				setData={(v) => setData({ ...data, ...v })}
			/>
		</div>
	)
}

export default {
	title: 'Wizard',
	component: WizardTemplate,
}

export const Default = {
	args: {},
}
