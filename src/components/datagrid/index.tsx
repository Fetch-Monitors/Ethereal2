import { useRef, useCallback, useEffect } from 'react'
import { useMeasure } from 'react-use'
import { WindowScroller } from 'react-virtualized'
import { VariableSizeGrid } from 'react-window'

export interface GridProps {
	data: unknown[]
	children: unknown
	rowHeight: number
	heightOverride?: number
	scrollToIndex?: number
}

export interface VariableSizeGridProps extends GridProps {
	minColumnWidth?: number
}

export interface StaticSizeGridProps extends GridProps {
	columnCount: number
}

export default ({
	data,
	minColumnWidth,
	rowHeight,
	heightOverride,
	children,
	scrollToIndex,
}: VariableSizeGridProps) => {
	const [layoutRef, { width }] = useMeasure<HTMLDivElement>()
	const scrollRef = useRef<HTMLDivElement>(null)
	const gridRef = useRef(null)
	const onScroll = useCallback(
		({ scrollTop }) => gridRef.current?.scrollTo({ scrollTop }),
		[],
	)
	const columns = Math.ceil(width / minColumnWidth)
	console.log(columns, width)

	useEffect(() => {
		if (scrollToIndex >= data.length - 1) {
			window.scrollTo({
				top: Math.floor(data.length - 1 / columns) * rowHeight,
			})
		} else {
			window.scrollTo({
				top: Math.floor((scrollToIndex || 1) / columns) * rowHeight,
			})
		}
	}, [columns, data.length, rowHeight, scrollToIndex])

	useEffect(() => {
		gridRef.current.resetAfterIndices({
			columnIndex: 0,
			rowIndex: 0,
			shouldForceUpdate: true,
		})
	}, [width, columns])

	return (
		<div
			ref={layoutRef}
			style={{
				width: '100%',
				height: '100%',
				maxWidth: '100%',
			}}
		>
			<div ref={scrollRef}>
				<WindowScroller onScroll={onScroll}>{() => <div />}</WindowScroller>
				<VariableSizeGrid
					ref={gridRef}
					itemData={(rowIndex, colIndex) =>
						data.length > rowIndex * columns + colIndex
							? data[rowIndex * columns + colIndex]
							: false
					}
					rowCount={Math.ceil(data.length / columns)}
					columnCount={columns}
					columnWidth={() => width / columns}
					rowHeight={() => rowHeight}
					width={width}
					height={heightOverride || window.outerHeight}
					style={{ height: '100% !important', overflow: 'none !important' }}
				>
					{children}
				</VariableSizeGrid>
			</div>
		</div>
	)
}
