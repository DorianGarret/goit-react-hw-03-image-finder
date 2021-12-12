import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Wrapper } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  render() {
    return createPortal(
      <Overlay>
        <Wrapper>{this.props.children}</Wrapper>
      </Overlay>,
      modalRoot,
    );
  }
}
