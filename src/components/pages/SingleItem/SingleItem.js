import React from 'react';

import { Link } from 'react-router-dom';
import './SingleItem.scss';
import itemData from '../../../helpers/data/itemData';

class SingleItem extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('unable to get single item:', err));
  }

  removeItem = () => {
    const { itemId } = this.props.match.params;
    itemData.deleteItem(itemId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete single', err));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    const editLink = `/edit/${itemId}`;
    return (
      <div className="SingleItem">
        <Link className="btn btn-warning" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
         <button className="btn btn-danger" onClick={this.removeItem}><i className="fas fa-trash-alt"></i></button>
        <h1>{item.itemName}</h1>
        <img src={item.itemImage} alt="item"/>
        <p>{item.itemDescription}</p>
      </div>
    );
  }
}

export default SingleItem;
