import React, { useState } from "react"
import { AgChartsReact } from "ag-charts-react"
import { AgChartOptions } from "ag-charts-community"

function getData() {
    // TODO: Get data from API
    return [
        {
            name: "Covered",
            count: 720,
        },
        {
            name: "Not Covered",
            count: 280,
        },
    ]
}

const data = getData()
const total = data.reduce((sum, d) => sum + d.count, 0)
const percentage = (value: number) => `${((value / total) * 100).toFixed()}%`

function TotalTagRequirement() {
    const [options] = useState<AgChartOptions>({
        data,
        width: 300,
        height: 300,
        series: [
            {
                type: "pie",
                angleKey: "count",
                fills: ["#35ab7c", "#dff3ea"],
                strokeWidth: 0,
                innerRadiusOffset: -20,
                innerLabels: [
                    {
                        text: percentage(data[0].count),
                        color: "#35ab7c",
                        fontSize: 72,
                    },
                    {
                        text: "Requirements met",
                        fontSize: 15,
                        margin: 4,
                    },
                ],
                highlightStyle: {
                    item: {
                        fill: undefined,
                        stroke: undefined,
                        strokeWidth: 0,
                    },
                    series: {
                        enabled: false,
                        dimOpacity: 0.2,
                        strokeWidth: 0,
                    },
                },
                innerCircle: {
                    fill: "#dff3ea",
                },
            },
        ],
    })

    return (
        <AgChartsReact options={options} />
    )
}

export default TotalTagRequirement
