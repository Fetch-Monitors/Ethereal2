import { IconField, InputField, Wrapper } from './elements'

export default ({
	value,
	dark,
	secondary,
	placeholder,
	minimal,
	icon,
	right,
	type,
	readOnly,
	onClick,
	onChange,
	required,
	autoComplete,
	error,
}: {
	value?: string
	required?: boolean
	right?: boolean
	dark?: boolean
	secondary?: boolean
	placeholder?: string
	minimal?: boolean
	icon?: React.ReactNode
	type?: string
	readOnly?: boolean
	onClick?: () => void
	onChange?: (arg0: string) => void
	autoComplete?: string
	error?: boolean
}) => (
	<Wrapper onClick={onClick}>
		{icon && (
			<IconField right={!!right} dark={!!dark}>
				{icon}
			</IconField>
		)}
		<InputField
			autoComplete={autoComplete}
			required={required}
			placeholder={placeholder || 'Enter here'}
			value={value}
			dark={!!dark}
			secondary={secondary}
			minimal={minimal}
			icon={!!icon}
			right={!!right}
			type={type || 'text'}
			readOnly={readOnly}
			error={error}
			onChange={(e) => onChange && onChange(e.target.value)}
		/>
	</Wrapper>
)
