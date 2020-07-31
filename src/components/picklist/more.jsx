/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Picklist, Option } from 'react-rainbow-components';

const containerStyles = {
  maxWidth: '150px',
};

const initialState = { value: { name: 'option 3', label: 'More Filters' } };

class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBuildingsAdded: false,
      value: initialState.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  addNewBuildings() {
    const { isBuildingsAdded } = this.state;
    this.setState({ isBuildingsAdded: !isBuildingsAdded });
  }

  handleChange(value) {
    this.setState({
      value,
    });
  }

  renderNewBuildings() {
    const { isBuildingsAdded } = this.state;
    if (isBuildingsAdded) {
      return <Option name="option 4" label="One World Trade Center" />;
    }
    return null;
  }

  render() {
    return (
      <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <Picklist
          id="picklist-1"
          style={containerStyles}
          onChange={this.handleChange}
          value={this.state.value}
          label="Select Building"
          hideLabel
        >
          <Option name="header" label="Your Buildings" variant="header" />
          <Option name="option 1" label="Experimental Building" />
          <Option name="option 2" label="Empire State" />
          <Option name="option 3" label="Popular" />
        </Picklist>
      </div>
    );
  }
}

export default More;
