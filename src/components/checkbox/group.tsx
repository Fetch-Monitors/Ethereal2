import { ReactNode } from 'react'
import styled from 'styled-components'
import Checkbox from '.'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 20px;
	margin-bottom: 10px;
`

export const Option = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;

	& > span {
		margin-left: 10px;
	}
`

export const Label = styled.p`
	font-size: 16px;
	font-weight: 500;
	margin: 5px 0;
	line-height: 16px;
`

export const Hint = styled.span<{ color?: string }>`
	font-size: 11px;
	line-height: 11px;
	margin: auto 5px auto 0;
	color: ${(props) => props.color || '#333'};
`

interface Option {
	label?: string
	hint?: string
	custom?: ReactNode
	id: string
}

export default ({
	options,
	values,
	onChange,
}: {
	options: Option[]
	values: string[]
	onChange: (id: string) => void
}) => (
	<Wrapper>
		{options.map(({ label, custom, hint, id }) => {
			const value = !!values.find((val) => val === id) || false
			return (
				<Option key={id} onClick={() => onChange(id)}>
					<Checkbox value={value} />
					<span style={{ display: 'flex', flexDirection: 'column' }}>
						<Label>{custom || label}</Label>
						<Hint>{hint}</Hint>
					</span>
				</Option>
			)
		})}
		{options.length === 0 && <Label>No options</Label>}
	</Wrapper>
)
