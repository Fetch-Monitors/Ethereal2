import { useState } from 'react'
import styled from 'styled-components'

import { MoonIcon } from './moonIcon'
import { SunIcon } from './sunIcon'

const IconButton = styled.button`
	all: unset;
	cursor: pointer;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: scale(2);
`

export default () => {
	const [state, setState] = useState(false)
	const SwitchIcon = state ? MoonIcon : SunIcon

	return (
		<IconButton onClick={() => setState(!state)}>
			<SwitchIcon />
		</IconButton>
	)
}
