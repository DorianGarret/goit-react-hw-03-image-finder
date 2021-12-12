import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

export default class Button extends Component {
  render() {
    return (
      <Btn type="button" onClick={this.props.onClick}>
        Load more
      </Btn>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
