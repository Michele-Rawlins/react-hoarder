import React from 'react';

import authData from '../../../helpers/data/authData';


import './New.scss';
import itemData from '../../../helpers/data/itemData';

class New extends React.Component {
  state = {
    newItemName: '',
    newItemImage: '',
    newItemDescription: '',
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

  saveNewItem = (e) => {
    e.preventDefault();
    const {
      newItemName,
      newItemImage,
      newItemDescription,
    } = this.state;

    const newItem = {
      itemName: newItemName,
      itemImage: newItemImage,
      itemDescription: newItemDescription,
      uid: authData.getUid(),
    };

    itemData.postItem(newItem)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to add new item', err));
  }

  render() {
    const {
      newItemName,
      newItemImage,
      newItemDescription,
    } = this.state;

    return (
      <div className="New col-12">
        <h1>New</h1>
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
          <button className="btn btn-primary" onClick={this.saveNewItem}>Save Item</button>
        </form>
     </div>
    );
  }
}

export default New;
