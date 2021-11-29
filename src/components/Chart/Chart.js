import React from 'react'

import ChartBar from './ChartBar'

import './Chart.css'

const Chart=(props) => {
    const valueArray = props.chartPoints.map(chartPoints=>chartPoints.value);
    const totalMax= Math.max(...valueArray)

    return (
        <div className="chart">
            {props.chartPoints.map(chartPoints => <ChartBar key={chartPoints.label} value={chartPoints.value} maxValue={totalMax} label={chartPoints.label} />)}

        </div>
    )
}

export default Chart
