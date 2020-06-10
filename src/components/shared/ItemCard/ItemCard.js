import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import itemsShape from '../../../helpers/propz/itemsShape';
import './ItemCard.scss';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemsShape.itemsShape,
    removeItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, removeItem } = this.props;
    const singleLink = `/items/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="ItemCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <img className="item-pic" src={item.itemImage} alt="item in collection"></img>
            <Link className="btn btn-info" to={singleLink}><i className="fas fa-binoculars"></i></Link>
            <Link className="btn btn-warning" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}><i className="fas fa-trash-alt"></i></button>
            <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
