import React, { ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useCopyToClipboard } from 'react-use'
import RenderOption from './renderOption'
import {
	Top,
	Segment,
	Bottom,
	Buttons,
	Title,
	Br,
	Wrapper as FormBuilder,
} from '../formBuilder/elements'
import Button from '../button'
import LoaderButton from '../button/loader'
import Stepper from '../stepper'

interface IChoice {
	label: ReactNode
	hint?: string
	icon?: ReactNode
	id: string
	// eslint-disable-next-line no-use-before-define
	options?: IOption[]
}

export interface IOption {
	label?: string
	hint?: ReactNode
	placeholder?: string
	choices?: IChoice[]
	component: string
	icon?: ReactNode
	props?: any
	id: string
	type?: string
	divider?: boolean
	validator?: (arg0: any) => boolean
	onClick?: () => void
}

interface ISegment {
	title: string
	options: IOption[]
}

export interface IData {
	[key: string]: { value: any; error: string }
}
interface IStep {
	name: string
	segments: ISegment[]
	progress: number
	back: VoidFunction
	next: (arg0: IData) => Promise<Error | true>
}

export interface IWizard {
	steps: IStep[]
	step: number
	onSubmit: (arg0: IData) => Promise<Error | true>
	onExit: VoidFunction
}

export interface IHidden {
	[key: string]: boolean
}

export default ({
	state,
	data,
	setWizard,
	setData,
}: {
	state: IWizard
	data: IData
	setWizard: (arg0: IWizard) => void
	setData: (arg0: IData) => void
}) => {
	const { segments, next, back, name } = state.steps[state.step]
	const [clipboard, copyToClipboard] = useCopyToClipboard()

	const renderOptions = (options: IOption[]) =>
		options?.map((option) => {
			const choice = option.choices?.find((c) => c.id === data[option.id].value)
			return (
				<React.Fragment key={option.id}>
					{RenderOption(option, data, setData, copyToClipboard)}
					{choice?.options && renderOptions(choice.options)}
				</React.Fragment>
			)
		})
	const x = clipboard
	if (x) {
	}

	return (
		<FormBuilder>
			<AnimatePresence exitBeforeEnter>
				<Top
					key={name}
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 20 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.25 }}
				>
					<h4>{name}</h4>
					<Br />
					{segments.map(({ title, options }, segmentI) => (
						<React.Fragment key={title}>
							<Segment>
								<Title>{title}</Title>
								{renderOptions(options)}
							</Segment>
							{segmentI < segments.length - 1 && <Br />}
						</React.Fragment>
					))}
				</Top>
			</AnimatePresence>
			<Bottom>
				<Stepper
					steps={new Array(state.steps.length)
						.fill(0)
						.map((_s, i) => ({ progress: state.steps[i].progress / 100 }))}
				/>
				<Buttons>
					<Button
						secondary
						variant="outlined"
						onClick={() => {
							if (state.step < 1) {
								state.onExit()
							} else {
								back()
								setWizard({ ...state, step: state.step - 1 })
							}
						}}
					>
						Back
					</Button>

					<LoaderButton
						variant="solid"
						onClick={async () => {
							if (state.step + 1 === state.steps.length) {
								state.onSubmit(data)
								setWizard({
									...state,
									steps: state.steps.map((s, i) =>
										i === state.step ? { ...s, progress: 100 } : s,
									),
								})
							} else {
								const res = await next(data)
								if (res) {
									setWizard({
										...state,
										step: state.step + 1,
										steps: state.steps.map((s, i) =>
											i === state.step ? { ...s, progress: 100 } : s,
										),
									})
								}
							}
						}}
					>
						{state.step + 1 === state.steps.length ? 'Done' : 'Next'}
					</LoaderButton>
				</Buttons>
			</Bottom>
		</FormBuilder>
	)
}
