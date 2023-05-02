import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore}) => {
  return (
    <div className={css.Button_position} >
      
        <button onClick={onLoadMore} className={css.Button}>
          Load more
        </button>
      
    </div>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};