import PropTypes from 'prop-types';

const itemsShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemDescription: PropTypes.string.isRequired,

});

export default { itemsShape };
