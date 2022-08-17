import { useState } from 'react'
import { useInterval } from 'react-use'
import { Datagrid, Toggle } from '../src'

export default {
	title: 'Datagrid',
	component: Datagrid,
}

const dummy_data = new Array(1000).fill(0).map((_, i) => ({
	label: `This is data for ${i}`,
	hint: `This is option ${i}`,
	id: `${i}`,
}))

const Card = ({
	style,
	key,
	data,
	columnIndex,
	rowIndex,
}: {
	style: React.CSSProperties
	key: number
	data: (
		row: number,
		col: number,
	) => {
		label: string
		hint: string
	}
	columnIndex: number
	rowIndex: number
}) => {
	const [state, setState] = useState(Math.random() > 0.5)

	useInterval(() => {
		setState(Math.random() > 0.5)
	}, Math.max(Math.random() * 1000, 250))
	const d = data(rowIndex, columnIndex)
	return (
		<div key={key} style={{ ...style, padding: '20px' }}>
			{d && (
				<div
					style={{
						boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
						borderRadius: '10px',
						padding: '16px',
					}}
				>
					<b>Interactive Component</b>
					<h5 style={{ margin: '2px 0' }}>col: {columnIndex}</h5>
					<h5 style={{ margin: 0 }}>row: {rowIndex}</h5>
					<h5 style={{ margin: '2px 0' }}>data: {d.label}</h5>
					<span>
						<Toggle
							value={rowIndex % 2 === 0 ? state : !state}
							onClick={setState}
						/>
					</span>
				</div>
			)}
		</div>
	)
}

export const Default = {
	args: {
		children: Card,
		minColumnWidth: 300,
		maxColumnWidth: 400,
		rowHeight: 150,
		data: dummy_data,
	},
}

export const ScrollToIndex = {
	args: {
		scrollToIndex: 0,
		children: Card,
		minColumnWidth: 300,
		maxColumnWidth: 400,
		rowHeight: 150,
		data: dummy_data,
	},
}

export const WithoutVirtualizationForDemoOnly = {
	args: {
		children: Card,
		minColumnWidth: 300,
		maxColumnWidth: 400,
		rowHeight: 150,
		heightOverride: 100000,
		data: dummy_data,
	},
}
