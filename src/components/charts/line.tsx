import React from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer
} from "recharts"
import { Data } from ".";

export default ({ data }: {
  data: Data
}) => {
  return (
    <ResponsiveContainer height="100%">

      <AreaChart
        data={data.dataPoints}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        <defs>
          {
            data.keys.map(({ backgroundColor, color, stopColor, key }) => <linearGradient key={key} id={'color' + key} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={backgroundColor || color} stopOpacity={backgroundColor ? 1 : .9} />
              <stop offset="100%" stopColor={backgroundColor || stopColor} stopOpacity={backgroundColor ? 1 : .6} />
            </linearGradient>)
          }

        </defs>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" hide={true} />
        <YAxis hide={true} />
        <Tooltip />
        {
          data.keys.map(({ color, key }) => <React.Fragment>
            <Line key={key} type="monotone" unit="M" strokeLinecap="round" strokeWidth={2}
              style={{ strokeDasharray: `40% 60%` }}
              dataKey="close"
              dot={false}
              legendType="none"
            />
            <Area stroke={color} type="natural" dataKey={key} strokeWidth={3} fillOpacity={1} fill={'url(#color' + key + ')'} /></React.Fragment>)
        }

      </AreaChart>
    </ResponsiveContainer>

  );
}
