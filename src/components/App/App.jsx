import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import { Header, Container, Main } from './App.styled';

export default class App extends Component {
  state = {
    searchImages: '',
    showModal: false,
    largeImage: {},
  };

  handleFormSubmit = searchImages => {
    this.setState({ searchImages });
  };

  toggleModal = event => {
    const { id, alt, dataset } = event.target;
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImage: {
        id,
        alt,
        src: dataset.full_size,
      },
    }));
  };
  render() {
    const {
      searchImages,
      showModal,
      largeImage: { id, src, alt },
    } = this.state;
    return (
      <>
        <Header>
          <Container>
            <Searchbar onSubmit={this.handleFormSubmit} />
          </Container>
        </Header>
        <Container>
          <Main>
            <ImageGallery
              searchImages={searchImages}
              onClick={this.toggleModal}
            />
          </Main>
        </Container>
        <ToastContainer autoClose={2500} />
        {showModal && <Modal> {<img id={id} src={src} alt={alt} />}</Modal>}
      </>
    );
  }
}
