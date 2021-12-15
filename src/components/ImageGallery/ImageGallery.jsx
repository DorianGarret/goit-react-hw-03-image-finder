import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Api from 'pixabayApi';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { List } from './ImageGallery.styled';

const API = new Api();

const status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
};
const { IDLE, PENDING, RESOLVED } = status;
export default class ImageGallery extends Component {
  state = {
    images: [],
    status: PENDING,
  };

  async componentDidMount() {
    try {
      const images = await API.fetchImages();
      this.setState({ images, status: IDLE });
    } catch {
      toast.error('oops something went wrong');
    }
  }

  async componentDidUpdate(prevProps, _prevState) {
    const { searchImages } = this.props;

    if (prevProps.searchImages !== searchImages) {
      this.setState({
        status: PENDING,
      });

      try {
        API.resetPage();
        API.query = searchImages;
        const images = await API.fetchImages();

        if (!images.length) {
          toast.error('images not found');
        }

        this.setState({
          images,
          status: RESOLVED,
        });
      } catch {
        toast.error('oops something went wrong');
      }
    }
  }

  handleLoadMoreImage = async () => {
    API.incrementPage();
    const nextPage = await API.fetchImages();
    this.setState(({ images }) => ({ images: [...images, ...nextPage] }));
    this.scrollDown();
  };

  scrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { images, status } = this.state;

    if (status === IDLE) {
      return (
        <>
          <List>
            {images.map(item => (
              <ImageGalleryItem
                key={item.id}
                params={item}
                onClick={this.props.onClick}
              />
            ))}
          </List>
          {images.length > 0 && <Button onClick={this.handleLoadMoreImage} />}
        </>
      );
    }

    if (status === PENDING) {
      return <Loader />;
    }

    if (status === RESOLVED) {
      return (
        <>
          <List>
            {images.map(item => (
              <ImageGalleryItem
                key={item.id}
                params={item}
                onClick={this.props.onClick}
              />
            ))}
          </List>
          {images.length > 0 && <Button onClick={this.handleLoadMoreImage} />}
        </>
      );
    }
  }
}
ImageGallery.propTypes = {
  searchImages: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
