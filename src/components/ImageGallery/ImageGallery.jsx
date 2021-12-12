import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Api from 'pixabay-api/pixabayApi';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import { List } from './ImageGallery.styled';

const API = new Api();

export default class ImageGallery extends Component {
  state = {
    images: [],
    status: 'pending',
  };

  async componentDidMount() {
    try {
      const images = await API.fetchImages();
      this.setState({ images, status: 'idle' });
    } catch {
      toast.error('oops something went wrong');
    }
  }

  async componentDidUpdate(prevProps, _prevState) {
    const { searchImages } = this.props;

    if (prevProps.searchImages !== searchImages) {
      this.setState({
        status: 'pending',
      });

      try {
        API.query = searchImages;
        const images = await API.fetchImages();

        if (!images.length) {
          toast.error('images not found');
        }

        this.setState({
          images,
          status: 'resolved',
        });
      } catch {
        toast.error('oops something went wrong');
      }
    }
  }

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return (
        <List>
          {images.map(item => (
            <ImageGalleryItem
              key={item.id}
              params={item}
              onClick={this.props.onClick}
            />
          ))}
        </List>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <List>
          {images.map(item => (
            <ImageGalleryItem
              key={item.id}
              params={item}
              onClick={this.props.onClick}
            />
          ))}
        </List>
      );
    }
  }
}
ImageGallery.propTypes = {
  searchImages: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
