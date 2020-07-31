import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';

const containerStyles = {
  minWidth: 500,
  minHeight: 264,
};

const Graph = () => (
  <div className="rainbow-p-vertical_medium rainbow-m_auto" style={containerStyles}>
    <div className="rainbow-align-content_center">
      <Chart
        labels={['2015', '2016', '2017', '2018']}
        type="line"
        className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
        disableCurves
        legendPosition
        disableXAxisGridLines
      >
        <Dataset
          values={[38, 60, 40, 70]}
          backgroundColor="#1de9b6"
          borderColor="#1de9b6"
        />
      </Chart>
    </div>
  </div>
);

export default Graph;
