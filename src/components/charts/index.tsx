export { default as Line } from './line';
export { default as Bar } from './bar';
export { default as Pie } from './pie'

type key = {
    key: string
    color: string
    stopColor?: string
    backgroundColor?: string
}

type dataPoint = {
    label: string
    [key: string]: number | string
}

export interface Data {
    keys: key[]
    dataPoints: dataPoint[]
}