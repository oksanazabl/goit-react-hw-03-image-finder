import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImgURL, id, onClick }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={smallImgURL} alt={id} onClick={onClick} />
    </li>
  );
};


export default ImageGalleryItem;
