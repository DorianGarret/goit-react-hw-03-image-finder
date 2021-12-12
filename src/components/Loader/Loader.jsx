import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import styled from '@emotion/styled/macro';

const ThreeDots = styled(Spinner)`
  margin: 0 auto;
  width: 80px;
  height: 80px;
`;

export default class Loader extends Component {
  render() {
    return <ThreeDots type="ThreeDots" color="#3f51b5" />;
  }
}
