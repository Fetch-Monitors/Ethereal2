import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Data } from ".";

export default ({ data }: { data: Data }) => {
    return (
        <ResponsiveContainer height="100%">
            <BarChart
                data={data.dataPoints}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} />
                <Tooltip />
                {
                    data.keys.map(({ color, key }) => <Bar dataKey={key} key={key} fill={color} />)
                }
            </BarChart>
        </ResponsiveContainer>
    );
}