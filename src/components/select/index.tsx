import { useRef, useState, useEffect, ReactNode } from 'react'
import styled from 'styled-components'
import { useClickAway } from 'react-use'

import { MdClose, MdSearch } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import Input from '../input'
import Radio from '../radio'
import CheckboxGroup from '../checkbox/group'

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	position: relative;
`

const Header = styled(Input)<{ isOpen: boolean }>`
	cursor: pointer;
	padding: 14px;
	border-radius: ${(props) => props.theme.borderRadius};
	border-color: ${(props) =>
		props.isOpen
			? props.secondary
				? props.theme.secondary
				: props.theme.primary
			: '#d2d6e9'};
	:hover {
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
	}
	transition: 0.1s ease-in-out;
`

const Base = styled(motion.div)`
	position: absolute;
	z-index: 3;
	width: 100%;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	border-radius: ${(props) => props.theme.borderRadius};
	margin-top: 6px;
	padding: 4px 20px;
	background: #ffffff;
	box-sizing: border-box;
`

const List = styled.ul`
	z-index: 3;
	width: 100%;
	box-sizing: border-box;
	max-height: 300px;
	overflow-y: auto;
	padding: 0;
`

export interface Option {
	label?: string
	custom?: ReactNode
	id: string
}

export const Select = ({
	options,
	onChange,
	defaultOption,
	value,
}: {
	options: Option[]
	onChange: (arg0: Option) => void
	defaultOption?: Option
	value?: Option
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [state, setState] = useState<Option>(
		defaultOption || { label: '', id: '' },
	)
	const ref = useRef(null)
	const [search, setSearch] = useState('')
	useClickAway(ref, () => setIsOpen(false))
	useEffect(() => value && setState(value), [value])

	return (
		<Container ref={ref}>
			<Header
				readOnly
				right
				placeholder="Click to select"
				isOpen={isOpen}
				value={state.label}
				icon={
					state.label && (
						<MdClose
							onClick={() => {
								setState({ label: '', id: '' })
								onChange({ label: '', id: '' })
							}}
						/>
					)
				}
				onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
			/>
			<AnimatePresence>
				{isOpen && (
					<Base
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{
							duration: 0.1,
						}}
					>
						{options.length > 5 && (
							<Input
								minimal
								icon={<MdSearch />}
								placeholder="Filter"
								value={search}
								onChange={setSearch}
							/>
						)}
						<List>
							<Radio
								options={options
									.filter(
										(o) =>
											o.id.toLowerCase().includes(search.toLowerCase()) ||
											o.label.toLowerCase().includes(search.toLowerCase()),
									)
									.filter((_o, i) => i < 50)}
								value={value || state}
								onChange={(opt) => {
									setState(opt)
									onChange(opt)
									setIsOpen(false)
								}}
							/>
						</List>
					</Base>
				)}
			</AnimatePresence>
		</Container>
	)
}

export const MultiSelect = ({
	options,
	onChange,
	defaultOptions,
	value,
}: {
	options: Option[]
	onChange: (arg0: string[]) => void
	defaultOptions?: string[]
	value?: string[]
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [state, setState] = useState<string[]>(defaultOptions || [])
	const ref = useRef(null)
	const [search, setSearch] = useState('')
	useClickAway(ref, () => setIsOpen(false))
	useEffect(() => value && setState(value), [value])

	return (
		<Container ref={ref}>
			<Header
				readOnly
				right
				placeholder="Click to select"
				isOpen={isOpen}
				value={state
					.filter((val) => val)
					.map((id) => options.find((opt) => opt.id === id)?.label)
					.reverse()
					.join(', ')}
				icon={
					!!state.filter((val) => val).length && (
						<MdClose
							onClick={() => {
								setState([])
								onChange([])
							}}
						/>
					)
				}
				onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
			/>
			<AnimatePresence>
				{isOpen && (
					<Base
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{
							duration: 0.1,
						}}
					>
						{options.length > 5 && (
							<Input
								minimal
								icon={<MdSearch />}
								placeholder="Filter"
								value={search}
								onChange={setSearch}
							/>
						)}
						<List>
							<CheckboxGroup
								options={options.filter(
									(o) =>
										o.id.toLowerCase().includes(search.toLowerCase()) ||
										o.label.toLowerCase().includes(search.toLowerCase()),
								)}
								values={state}
								onChange={(val) => {
									let newState = state
									if (state.includes(val)) {
										newState = newState.filter((opt) => opt !== val)
									} else {
										newState = [...newState, val]
									}

									setState(newState)
									if (onChange) {
										onChange(newState)
									}
								}}
							/>
						</List>
					</Base>
				)}
			</AnimatePresence>
		</Container>
	)
}

export interface MultipleSelectProps {
	multi: true
	options: Option[]
	value: string[]
	onChange: (value: string[]) => void
	defaultOptions?: string[]
}

export interface SingleSelectProps {
	multi: false
	options: Option[]
	value: Option
	onChange: (value: Option) => void
	defaultOption?: Option
}

export default (props: MultipleSelectProps | SingleSelectProps) =>
	props.multi === true ? <MultiSelect {...props} /> : <Select {...props} />
