/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-rainbow-components';

class Buttontwo extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <Button label={title} variant="brand" className="rainbow-m-around_medium" />
      </>
    );
  }
}

Buttontwo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Buttontwo;
