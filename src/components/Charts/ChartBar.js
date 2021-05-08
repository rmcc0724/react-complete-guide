import React from 'react'

import './ChartBar.css'

const ChartBar = (props) => {

let barHeightValue = '0%';

if(props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
}

  return (
    <div className="char-bar">
      <div className="char-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="char-bar__label"></div>
    </div>
  )
}
