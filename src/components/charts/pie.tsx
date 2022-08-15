import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

type dataPoint = {
    name: string
    value: number
    color: string
}

export default ({ data }: { data: dataPoint[] }) => {

    return (
        <ResponsiveContainer height="100%">
            <PieChart onMouseEnter={(e) => console.log(e)}>
                <Tooltip />
                <Pie
                    data={data}
                    dataKey="value"
                >
                    {data.map((_e, index) => (
                        <Cell key={`cell-${index}`} fill={data[index].color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
