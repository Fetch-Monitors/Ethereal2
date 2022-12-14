import { Fragment } from 'react'
import Toggle from '../toggle'
import SegmentedControl from '../segmentedControl'
import Radio from '../radio'
import { Option, Label, Tag, Hint, Br } from '../formBuilder/elements'
import Input from '../input'
import Button from '../button'

import { IData, IOption } from './index'
import Select, { MultiSelect } from '../select'

const isStatic = (component: string) =>
	// Determines if the component does not have a value
	component === 'button'

export default (
	option: IOption,
	data: IData,
	onChange: (arg0: IData) => void,
	copyToClipboard: (arg0: any) => void,
) => {
	const {
		component,
		label,
		hint,
		placeholder,
		choices,
		props,
		type,
		divider,
		validator,
		onClick,
	} = option
	let { value, error } = isStatic(component)
		? { value: '', error: '' }
		: data[option.id]
	const clientError = validator
		? validator(value)
			? false
			: 'Make sure to enter a valid url'
		: false
	const onHandleChange = (v: any) => {
		onChange({ [option.id]: { ...data[option.id], value: v } })
	}

	switch (component) {
		case 'input':
			return (
				<Option key={label}>
					<span>
						<Label>{label}</Label>
						<Input
							{...props}
							error={clientError}
							placeholder={placeholder}
							value={value}
							onChange={onHandleChange}
						/>
						<Hint color="#d64f4f">{error || clientError}</Hint>
					</span>
				</Option>
			)
		case 'tag':
			if (type === 'number') {
				value = parseFloat(value.replace(/[^0-9.-]+/g, ''))
			}

			return (
				<Option key={label}>
					<span>
						<Label>{label}</Label>
						<Tag
							style={{ cursor: 'pointer' }}
							title="click to copy"
							onClick={() => {
								copyToClipboard(value)
							}}
						>
							{value || placeholder}
						</Tag>
						<Hint color="#d64f4f">{error}</Hint>
					</span>
				</Option>
			)
		case 'toggle':
			return (
				<Option key={label}>
					<span>
						<Label>{label}</Label>
						<Hint>{hint}</Hint>
					</span>
					<Toggle value={value} onClick={onHandleChange} />
				</Option>
			)
		case 'radio':
			return (
				<Fragment key={label}>
					{divider && <Br />}
					<Option>
						<span>
							<Label>{label}</Label>
							<Hint>{hint}</Hint>
						</span>
					</Option>
					<Option horizontal={false}>
						{choices ? (
							<Radio
								// @ts-expect-error shut of
								options={choices}
								// @ts-expect-error shut of
								value={choices.find((c) => c.id === value)}
								onChange={(v) => onHandleChange(v.id)}
							/>
						) : (
							<p>No choices specified for radio</p>
						)}
					</Option>
				</Fragment>
			)
		case 'segmentedControl':
			return (
				<>
					<Option>
						{choices ? (
							<SegmentedControl
								value={value}
								options={choices}
								onChange={(v) => {
									onHandleChange(v.id)
								}}
							/>
						) : (
							<p>No choices specified for segmentedControl</p>
						)}
					</Option>
					<Option>
						{choices ? (
							<Hint>{choices.find((c) => c.id === value)?.hint}</Hint>
						) : (
							<p>No choices specified of which there is a hint for</p>
						)}
					</Option>
				</>
			)
		case 'button':
			return (
				<Option>
					<span>
						<Button variant="solid" onClick={onClick}>
							{label}
						</Button>
					</span>
				</Option>
			)
		case 'select':
			return (
				<>
					<Option>
						<span>
							<Label>{label}</Label>
							<Hint>{hint}</Hint>
						</span>
					</Option>
					<Option>
						{choices ? (
							props?.isMulti ? (
								<MultiSelect
									options={choices as IOption[]}
									value={value}
									onChange={(v) => onHandleChange(v)}
								/>
							) : (
								<Select
									options={choices as IOption[]}
									// @ts-expect-error shut of
									value={choices.find((c) => c.id === value)}
									onChange={(v) => onHandleChange(v.id)}
								/>
							)
						) : (
							<p>No choices specified for dropdown</p>
						)}
					</Option>
				</>
			)
		case 'hidden':
			// Nothing to see here
			return null

		default:
			return <p>Something is broken</p>
	}
}
