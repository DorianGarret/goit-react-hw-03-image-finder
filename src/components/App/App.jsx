import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { Header, Container, Main } from './App.styled';

export default class App extends Component {
  state = {
    searchImages: '',
  };

  handleFormSubmit = searchImages => {
    this.setState({ searchImages });
  };
  render() {
    const { searchImages } = this.state;
    return (
      <>
        <Header>
          <Container>
            <Searchbar onSubmit={this.handleFormSubmit} />
          </Container>
        </Header>
        <Container>
          <Main>
            <ImageGallery searchImages={searchImages} />
          </Main>
        </Container>
        <ToastContainer autoClose={2500} />
      </>
    );
  }
}
