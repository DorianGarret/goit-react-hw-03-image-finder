import PropTypes from 'prop-types';

import { Item, Image } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ params, onClick }) {
  const { id, webformatURL, largeImageURL, tags } = params;
  return (
    <Item>
      <Image
        id={id}
        src={webformatURL}
        alt={tags}
        data-full_size={largeImageURL}
        onClick={onClick}
      />
    </Item>
  );
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
