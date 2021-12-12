import axios from 'axios';
import qs from 'qs';

const AUTH_TOKEN = '23790821-6777a11e2db191613ff9bf1d2';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export default class PixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    const searchParam = qs.stringify(
      {
        key: AUTH_TOKEN,
        q: this.searchQuery,
        page: this.page,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 16,
      },
      { addQueryPrefix: true },
    );

    const response = await axios.get(searchParam);
    const data = await response.data;
    const hits = await data.hits;
    return this.getImagesParams(hits);
  }

  getImagesParams(images) {
    return images.map(({ id, webformatURL, largeImageURL, tags }) => {
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
