import React from 'react';

import './SingleItem.scss';
import itemData from '../../../helpers/data/itemData';

class SingleItem extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    itemData.getSingleItem(itemId)
      .then((tesponse) => this.setState({ item: Response.data }))
      .catch((err) => console.error('unable to ge tsingle item:', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleItem">
        <h1>{item.itemName}</h1>
        <p>{item.itemImage}</p>
        <p>{item.itemDescription}</p>
      </div>
    );
  }
}

export default SingleItem;
