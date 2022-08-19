import styled from 'styled-components'

export const Button = styled.button<{
	variant: 'solid' | 'outlined' | 'text'
	secondary: boolean
	disabled: boolean
	$loading?: boolean
}>`
	border: 0;
	border-radius: ${(props) => props.theme.borderRadius};
	width: 100%;
	box-sizing: border-box;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	display: inline-block;
	font-size: 14px;
	font-weight: 550;
	line-height: 1;
	outline: none;
	padding: 1rem 2rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	user-select: none;
	white-space: nowrap;
	box-sizing: border-box;
	-webkit-tap-highlight-color: transparent;
	background-color: ${(props) =>
		props.variant === 'solid'
			? props.secondary
				? props.theme.secondary
				: props.theme.primary
			: 'transparent'};
	${(props) =>
		props.variant === 'outlined'
			? `
      border: 2px solid ${
				props.secondary ? props.theme.secondary : props.theme.primary
			};
    `
			: `
      padding: calc(1rem + 2px) calc(2rem + 2px);
    `}

	${(props) =>
		(props.disabled || props.$loading) &&
		`
      filter: brightness(50%);
    `}

    color: ${(props) =>
		props.variant === 'solid'
			? '#ffffff'
			: props.secondary
			? props.theme.secondary
			: props.theme.primary};

	position: relative;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	${({ variant }) =>
		variant === 'text' &&
		`
    box-shadow: none;
  `}
	-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	-webkit-font-smoothing: subpixel-antialiased;
	backface-visibility: hidden;

	::after {
		content: '';
		position: absolute;
		border-radius: ${(props) => props.theme.borderRadius};
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
		${({ variant, theme, secondary }) =>
			variant === 'text' &&
			`
    box-shadow: none;
    background: ${secondary ? theme.secondary + 30 : theme.primary + 30};
  `}
		opacity: 0;
		-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
		transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	:active:hover {
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		${({ variant }) =>
			variant === 'text' &&
			`
    box-shadow: none;
  `}
	}

	:hover::after {
		opacity: 1;
	}
	.rippleBox {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		top: 0;
		left: 0;
		.ripple {
			position: absolute;

			border-radius: 50%;
			transform: scale(0);
			animation: ripple 600ms linear;
			background-color: ${(props) =>
				props.variant === 'solid'
					? 'inherit'
					: `${
							props.secondary ? props.theme.secondary : props.theme.primary
					  }44`};
		}

		@keyframes ripple {
			to {
				transform: scale(4);
				opacity: 0;
			}
		}
	}
`

export const Loader = styled.div`
	position: absolute;
	left: 15px;
	top: 25%;
	transform: translateY(-50%) scale(0.5);
`
