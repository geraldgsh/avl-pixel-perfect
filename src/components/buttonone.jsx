/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-rainbow-components';

class Buttonone extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <>
        <Button style={{ marginRight: '10px' }} label={title} variant="neutral" className="rainbow-m-around_medium" />
      </>
    );
  }
}

Buttonone.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Buttonone;
