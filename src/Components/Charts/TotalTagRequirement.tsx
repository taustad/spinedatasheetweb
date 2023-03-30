import { useState } from 'react'
import { AgChartsReact } from 'ag-charts-react'
import { AgChartOptions } from 'ag-charts-community'

function getData() {
    return [
        {
            name: 'Covered',
            count: 720,
        },
        {
            name: 'Not Covered',
            count: 280,
        },
    ];
}

const data = getData()
const total = data.reduce((sum, d) => sum + d.count, 0)
const percentage = (value: number) => `${((value / total) * 100).toFixed()}%`

function TotalTagRequirement() {
    const [options] = useState<AgChartOptions>({
        data,
        series: [
            {
                type: 'pie',
                angleKey: 'count',
                fills: ['#35ab7c', '#dff3ea'],
                strokeWidth: 0,
                innerRadiusOffset: -20,
                innerLabels: [
                    {
                        text: percentage(data[0].count),
                        color: '#35ab7c',
                        fontSize: 72,
                    },
                    {
                        text: 'Requirements met',
                        fontSize: 15,
                        margin: 4,
                    },
                ],
                innerCircle: {
                    fill: '#dff3ea',
                },
            },
        ],
    })

    return (
        <AgChartsReact options={options}/>
    )
}

export default TotalTagRequirement