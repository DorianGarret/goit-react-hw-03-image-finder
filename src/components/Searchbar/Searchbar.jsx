import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchButton,
  Form,
  ButtonLabel,
  SearchInput,
} from './Searcbar.styled';

export default class Searchbar extends Component {
  state = {
    searchImages: '',
  };

  handleSearchChange = event => {
    this.setState({ searchImages: event.target.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchImages } = this.state;

    if (searchImages.trim() === '') {
      toast.error('Enter the name of the pictures or photos!');
      this.setState({
        searchImages: '',
      });
      return;
    }

    this.props.onSubmit(searchImages);
    this.setState({
      searchImages: '',
    });
  };

  render() {
    const { searchImages } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <SearchButton type="submit">
          <ButtonLabel />
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchImages}
          onChange={this.handleSearchChange}
        />
      </Form>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
