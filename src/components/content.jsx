import React from 'react';
import Graph from './lineGraph';
import Popular from './picklist/popular';
import Arithmetic from './picklist/arithmetic';
import More from './picklist/more';
import NumInput from './numInput';
import Badger from './badger';
import Buttonone from './buttonone';
import Buttontwo from './buttontwo';

const Content = () => (
  <div className="container mt-5 mb-5 lines">
    <div className="content mt-5 mb-5">
      <div className="row">
        <div className="m-3"><Popular /></div>
        <div className="m-3"><Arithmetic /></div>
        <div className="m-3"><Popular /></div>
        <div className="m-3"><More /></div>
      </div>
      <div>
        <div className="row bottomline">
          <div className="m-3 title">Arithmetics</div>
          <div className="m-3 title">Real Problems</div>
          <div className="m-3 ml-auto"><Badger title="Formula" /></div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-7">
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="m-0" style={{ fontSize: 12, fontWeight: '700' }}>Number of Portable Media Players</p>
            <p style={{ fontSize: 12, fontWeight: '700' }}>Sold Worldwide Each Year from 2006 to 2011</p>
            <div className="row">
              <div className="vertical-text">Number sold (millions)</div>
              <Graph />
            </div>
            <div className="row">
              <Badger title="Tag A" />
              <Badger title="Tag B" />
              <Badger title="Tag C" />
            </div>
          </div>
          <div className="col-5 d-flex align-items-center">
            <NumInput />
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ marginLeft: 'auto' }}>
          <Buttonone title="Skip" />
          <Buttontwo title="Submit" />
        </div>
      </div>
    </div>
  </div>
);

export default Content;
