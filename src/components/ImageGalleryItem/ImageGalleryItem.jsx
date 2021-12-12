import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Item, Image } from './ImageGalleryItems.styled';

export default class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props.params;
    return (
      <Item>
        <Image
          id={id}
          src={webformatURL}
          alt={tags}
          data-full_size={largeImageURL}
          onClick={this.props.onClick}
        />
      </Item>
    );
  }
}
ImageGalleryItem.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
