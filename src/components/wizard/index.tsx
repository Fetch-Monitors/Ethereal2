/* eslint-disable new-cap */
import { Fragment, ReactNode, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useCopyToClipboard } from 'react-use'
import {
	MdArrowLeft,
	MdArrowRight,
	MdChevronLeft,
	MdChevronRight,
} from 'react-icons/md'
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
	const [open, setOpen] = useState(true)

	const renderOptions = (options: IOption[]) =>
		options?.map((option) => {
			const choice = option.choices?.find((c) => c.id === data[option.id].value)
			return (
				<Fragment key={option.id}>
					{RenderOption(option, data, setData, copyToClipboard)}
					{choice?.options && renderOptions(choice.options)}
				</Fragment>
			)
		})
	const x = clipboard
	if (x) {
		// If this is removed, the component breaks
	}

	const backward = () => {
		if (state.step < 1) {
			state.onExit()
		} else {
			back()
			setWizard({ ...state, step: state.step - 1 })
		}
	}

	const forward = async () => {
		if (state.step + 1 >= state.steps.length) {
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
	}

	return (
		<FormBuilder
			animate={
				open
					? {
							x: 0,
					  }
					: {
							x: 320,
					  }
			}
			transition={{
				type: 'spring',
				stiffness: 900,
				damping: 200,
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: '-50px',
					top: '50%',
					transform: 'translateY("-50%")',
					zIndex: 100,
					background: 'white',
					width: '40px',
					height: '40px',
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					fontSize: '40px',
					borderRadius: '10px',
					boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.1)',
					cursor: 'pointer',
				}}
				tabIndex={0}
				role="button"
				onClick={() => setOpen(!open)}
			>
				{open ? <MdChevronRight /> : <MdChevronLeft />}
			</div>
			<AnimatePresence exitBeforeEnter>
				<Top
					key={name}
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 20 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.25 }}
				>
					<h4
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: '100%',
						}}
					>
						{name}
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								width: 'min-fit',
								fontSize: '30px',
								cursor: 'pointer',
							}}
						>
							<MdArrowLeft onClick={backward} />
							<MdArrowRight onClick={forward} />
						</div>
					</h4>
					<Br />
					{segments.map(({ title, options }, segmentI) => (
						<Fragment key={title}>
							<Segment>
								<Title>{title}</Title>
								{renderOptions(options)}
							</Segment>
							{segmentI < segments.length - 1 && <Br />}
						</Fragment>
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
					<Button secondary variant="outlined" onClick={backward}>
						Back
					</Button>

					<LoaderButton variant="solid" onClick={forward}>
						{state.step + 1 === state.steps.length ? 'Done' : 'Next'}
					</LoaderButton>
				</Buttons>
			</Bottom>
		</FormBuilder>
	)
}
