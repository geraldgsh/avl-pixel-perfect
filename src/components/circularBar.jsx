import React from 'react';
import {
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

const Circle = () => (
  <div>
    <div className="mt-5 mb-5" style={{ width: 200, height: 200 }}>
      <CircularProgressbarWithChildren
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={2}
        styles={{
          root: {},
          path: {
            stroke: `rgba(57, 148, 203, ${percentage / 100})`,
            strokeLinecap: 'butt',
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: '0',
            transformOrigin: 'center center',
          },
          trail: {
            stroke: '#2f3032',
            strokeLinecap: 'butt',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          text: {
            fill: 'black',
            fontSize: '26px',
            fontWeight: 'bold',
          },
          background: {
            fill: '#3e98c7',
          },
        }}
      >
        <h5 style={{ fontSize: 16, fontWeight: 'bolder', marginTop: -80 }}>
          ACCURACY
        </h5>
      </CircularProgressbarWithChildren>
    </div>
    <div className="row container">
      <h5 style={{ fontSize: 16, fontWeight: 'bolder' }}>
        COMPLETED
      </h5>
    </div>
    <div className="row container">
      <h1 style={{ fontWeight: 'bold' }}>100</h1>
      <p className="mt-35" style={{ fontWeight: '600' }}>&nbsp;&nbsp;PROBLEMS</p>
    </div>
    <div className="row container mt-5">
      <h5 style={{ fontSize: 16, fontWeight: 'bolder' }}>
        CORRECT
      </h5>
    </div>
    <div className="row container">
      <h1 style={{ fontWeight: 'bold' }}>75</h1>
      <p className="mt-35" style={{ fontWeight: '600' }}>&nbsp;&nbsp;PROBLEMS</p>
    </div>
    <div className="row container" style={{ bottom: '0px', position: 'absolute' }}>
      <p style={{ fontSize: 14, fontWeight: '700' }}>PAST 24 HOURS, 2020 2/2020</p>
    </div>
  </div>
);

export default Circle;
