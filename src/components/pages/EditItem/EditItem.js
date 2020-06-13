import React from 'react';

import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';
import './EditItem.scss';

class EditItem extends React.Component {
  state = {
    newItemName: '',
    newItemImage: '',
    newItemDescription: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.itemId;
    itemData.getSingleItem(editId)
      .then((response) => {
        const item = response.data;
        this.setState({
          newItemName: item.itemName,
          newItemImage: item.itemImage,
          newItemDescription: item.itemDescrption,
        });
      })
      .catch((err) => console.error('unable to edit item', err));
  }

  newName = (e) => {
    e.preventDefault();
    this.setState({ newItemName: e.target.value });
  }

  newImage = (e) => {
    e.preventDefault();
    this.setState({ newItemImage: e.target.value });
  }

  newDescription = (e) => {
    e.preventDefault();
    this.setState({ newItemDescription: e.target.value });
  }

  updateItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const {
      newItemName,
      newItemImage,
      newItemDescription,
    } = this.state;

    const updatedItem = {
      itemName: newItemName,
      itemImage: newItemImage,
      itemDescription: newItemDescription,
      uid: authData.getUid(),
    };

    itemData.putItem(itemId, updatedItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to edit item', err));
  }

  render() {
    const {
      newItemName,
      newItemImage,
      newItemDescription,
    } = this.state;

    return (
      <div className="EditItem col-12">
        <h1>Edit Item</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="new-item-name">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="new-item-name"
              value={newItemName}
              onChange={this.newName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-item-image">Item Image</label>
            <input
              type="text"
              className="form-control"
              id="new-item-image"
              value={newItemImage}
              onChange={this.newImage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-item-description">Item Image</label>
            <input
              type="text"
              className="form-control"
              id="new-item-description"
              value={newItemDescription}
              onChange={this.newDescription}
            />
          </div>
          <button className="btn btn-primary" onClick={this.updateItem}>Update Item</button>
        </form>
     </div>
    );
  }
}

export default EditItem;
