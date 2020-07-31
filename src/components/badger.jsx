/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-rainbow-components';

class Badger extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <Badge
          className="rainbow-m-around_medium"
          label={title}
          variant="brand"
        />
      </>
    );
  }
}

Badger.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badger;
